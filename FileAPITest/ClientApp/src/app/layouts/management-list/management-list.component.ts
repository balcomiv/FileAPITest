import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'app-management-list',
  templateUrl: './management-list.component.html',
  styleUrls: ['./management-list.component.scss']
})
export class ManagementListComponent implements OnInit {

  constructor(public media: TdMediaService) {}

  ngOnInit() {
  }

  routes: Object[] = [{
    icon: 'home',
    route: '.',
    title: 'Home',
  },
  // {
  //   icon: 'library_books',
  //   route: '.',
  //   title: 'Documentation',
  // }, 
  // {
  //   icon: 'color_lens',
  //   route: '.',
  //   title: 'Style Guide',
  // }, {
  //   icon: 'view_quilt',
  //   route: '.',
  //   title: 'Layouts',
  // },
  // }, {
  //   icon: 'picture_in_picture',
  //   route: '/kitchen-sink',
  //   title: 'Kitchen Sink',
  // },
  // {
  //   icon: 'input',
  //   route: '/api-response-settings',
  //   title: 'API Respons Settings',
  // },
  {
    icon: 'picture_in_picture',
    route: '/sample-test-rig',
    title: 'Sample Test Rig',
  },
  {
    icon: 'library_books',
    route: '/fetch-pdf',
    title: 'Endpoint Testing',
  }];

  //  Main Nav - User Options
  usermenu: Object[] = [{
    icon: 'swap_horiz',
    route: '.',
    title: 'Switch account',
  }, {
    icon: 'tune',
    route: '.',
    title: 'Account settings',
  }, {
    icon: 'exit_to_app',
    route: '.',
    title: 'Sign out',
  }];

  //  Sidebar List Options
  navmenu: Object[] = [{
    icon: 'looks_one',
    route: '/document-export',
    queryParams: { type: 'PDF' },
    state: { hello: 'world-PDF' },
    title: 'PDF',
    description: 'Item description',
  }, {
    icon: 'looks_two',
    route: '.',
    title: 'Excel',
    description: 'Item description',
  }, {
    icon: 'looks_3',
    route: '/document-export',
    queryParams: { type: 'HTML' },
    state: { hello: 'world-HTML' },
    title: 'HTML',
    description: 'Item description',
  }, {
    icon: 'looks_4',
    route: '.',
    title: 'CSV',
    description: 'Item description',
  }, {
    icon: 'looks_5',
    route: '.',
    title: 'Text',
    description: 'Item description',
  }];

  // navmenu: Object[] = [{
  //   icon: 'looks_one',
  //   route: '.',
  //   title: 'First item',
  //   description: 'Item description',
  // }, {
  //   icon: 'looks_two',
  //   route: '.',
  //   title: 'Second item',
  //   description: 'Item description',
  // }, {
  //   icon: 'looks_3',
  //   route: '.',
  //   title: 'Third item',
  //   description: 'Item description',
  // }, {
  //   icon: 'looks_4',
  //   route: '.',
  //   title: 'Fourth item',
  //   description: 'Item description',
  // }, {
  //   icon: 'looks_5',
  //   route: '.',
  //   title: 'Fifth item',
  //   description: 'Item description',
  // }];

}
