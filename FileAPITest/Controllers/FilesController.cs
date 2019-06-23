using System.IO;
using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;

namespace FileAPITest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private const string SAMPLE_FILE = "sample-3pp.pdf";
        private readonly IFileProvider _fileProvider;
        public FilesController(IFileProvider fileProvider) => _fileProvider = fileProvider;

        // GET: api/Files
        [HttpGet]
        // [HttpGet("")]
        // GET: api/files/
        // [HttpGet("{fileName?, contentType?, inline?}", Name = "Get")]
        public IActionResult Get(string fileName = "sample-3pp.pdf", string contentType = "application/pdf", bool inline = true)
        {
            //  https://csharp.hotexamples.com/examples/-/IFileProvider/GetFileInfo/php-ifileprovider-getfileinfo-method-examples.html

            var fileInfo = _fileProvider.GetFileInfo(fileName);

            if (!fileInfo.Exists)
            {
                return NotFound();
            }

            var fileExtension = Path.GetExtension(fileInfo.Name);

            var data = System.IO.File.ReadAllBytes(fileInfo.PhysicalPath);

            //if (fileName == SAMPLE_FILE)
            //{
            //    contentType = "application/pdf";
            //    inline = true;
            //}

            // Response...
            System.Net.Mime.ContentDisposition cd = new System.Net.Mime.ContentDisposition
            {
                FileName = $"New_Dnld_Name{fileExtension}",
                Inline = inline  // false = prompt the user for downloading;  true = browser to try to show the file inline
            };
            Response.Headers.Add("Content-Disposition", cd.ToString());
            Response.Headers.Add("Content-Type", contentType);
            // Response.Headers.Add("X-Content-Type-Options", "nosniff");

            // return new string[] { fileName, contentType, inline.ToString() };
            return File(data, contentType);
        }

        [HttpGet("{sample-pdf}")]
        public IActionResult Get()
        {
            var fileInfo = _fileProvider.GetFileInfo(SAMPLE_FILE);

            if (!fileInfo.Exists)
            {
                return NotFound();
            }

            // Response...
            System.Net.Mime.ContentDisposition cd = new System.Net.Mime.ContentDisposition
            {
                FileName = "TestDownload.pdf",
                Inline = true  // false = prompt the user for downloading;  true = browser to try to show the file inline
            };
            Response.Headers.Add("Content-Disposition", cd.ToString());

            var data = System.IO.File.ReadAllBytes(fileInfo.PhysicalPath);

            // return File(data, MediaTypeNames.Image.Jpeg, name);
            return File(data, "application/pdf");
            // return File(data, MediaTypeNames.Application.Pdf, "TestDownload.pdf"); 
        }
    }
}


/*
 * https://stackoverflow.com/questions/38897764/asp-net-core-content-disposition-attachment-inline
  // Response...
       System.Net.Mime.ContentDisposition cd = new System.Net.Mime.ContentDisposition
       {
              FileName = file,
              Inline = displayInline  // false = prompt the user for downloading;  true = browser to try to show the file inline
       };
       Response.Headers.Add("Content-Disposition", cd.ToString());
       Response.Headers.Add("X-Content-Type-Options", "nosniff");

 */
