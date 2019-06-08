using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;

namespace FileAPITest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly IFileProvider _fileProvider;
        public FilesController(IFileProvider fileProvider) => _fileProvider = fileProvider;

        // GET: api/Files
        [HttpGet]
        public IActionResult Get(string fileName, string contentType = "text/json", bool inline = false)
        {
            //  https://csharp.hotexamples.com/examples/-/IFileProvider/GetFileInfo/php-ifileprovider-getfileinfo-method-examples.html

            var fileInfo = _fileProvider.GetFileInfo(fileName);

            if (!fileInfo.Exists)
            {
                return NotFound();
            }

            var data = System.IO.File.ReadAllBytes(fileInfo.PhysicalPath);

            // Response...
            System.Net.Mime.ContentDisposition cd = new System.Net.Mime.ContentDisposition
            {
                FileName = "Test PDF Name",
                Inline = true  // false = prompt the user for downloading;  true = browser to try to show the file inline
            };
            Response.Headers.Add("Content-Disposition", cd.ToString());
            // Response.Headers.Add("X-Content-Type-Options", "nosniff");
            Response.Headers.Add("Content-Type", "application/pdf");

            // return new string[] { fileName, contentType, inline.ToString() };
            return File(data, contentType);
        }

        [HttpGet("{imageName}")]
        public IActionResult GetImageFile(string imageName)
        {
            // Response...
            System.Net.Mime.ContentDisposition cd = new System.Net.Mime.ContentDisposition
            {
                FileName = "Test PDF Name",
                Inline = true  // false = prompt the user for downloading;  true = browser to try to show the file inline
            };
            Response.Headers.Add("Content-Disposition", cd.ToString());
            // Response.Headers.Add("X-Content-Type-Options", "nosniff");
            Response.Headers.Add("Content-Type", "application/pdf");

            var name = $"{imageName}.pdf";

            var fileInfo = _fileProvider.GetFileInfo(name);

            var data = System.IO.File.ReadAllBytes(fileInfo.PhysicalPath);

            // return File(data, MediaTypeNames.Image.Jpeg, name);
            return File(data, "application/pdf");
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
