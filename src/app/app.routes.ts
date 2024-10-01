import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { QuesComponent } from './page/ques/ques.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'crms/customer',
        pathMatch:'full'
    },
    {
        path: 'crms/customer',
        component: HomeComponent
    },
    {
        path: 'crms/customer/utr',
        component: QuesComponent
    },
    {
        path: 'crms/customer/sicr',
        component: QuesComponent
    }
];
