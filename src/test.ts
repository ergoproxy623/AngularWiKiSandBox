import 'jest-preset-angular/setup-jest'
// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import { getTestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { RouterModule } from "@angular/router";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StoreModule } from "@ngrx/store";
import { appReducers } from "./app/store/reducers/deducers-map";

// First, initialize the Angular testing environment.
getTestBed().resetTestEnvironment()
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

export const TestBadImportConfig = () => {
    return [RouterModule.forRoot([]),
        HttpClientTestingModule,
        StoreModule.forRoot(appReducers)];
};
