/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule, AppConfigService } from 'ng2-alfresco-core';
import { SearchModule } from 'ng2-alfresco-search';
import { LoginModule } from 'ng2-alfresco-login';
import { DataTableModule } from 'ng2-alfresco-datatable';
import { DocumentListModule } from 'ng2-alfresco-documentlist';
import { UploadModule } from 'ng2-alfresco-upload';
import { ViewerModule } from 'ng2-alfresco-viewer';
import { ActivitiFormModule } from 'ng2-activiti-form';
import { ActivitiTaskListModule } from 'ng2-activiti-tasklist';
import { ActivitiProcessListModule } from 'ng2-activiti-processlist';
import { UserInfoComponentModule } from 'ng2-alfresco-userinfo';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { TextAnalyticsService } from './components/textanalysis/text-analysis.service';
import { ImageAnalyticsService } from './components/imageanalysis/image-analysis.service';
import { CreateFolderDialog } from './dialogs/create-folder.dialog';
import { DebugAppConfigService } from './services/debug-app-config.service';

import {
    LoginDemoComponent,
    SentimentComponent,
    SettingsComponent,
    TextAnalysisComponent,
    ImageAnalysisComponent
} from './components/index';

let appConfigFile = 'app.config-dev.json';
if (process.env.ENV === 'production') {
    appConfigFile = 'app.config-prod.json';
}

@NgModule({
    imports: [
        BrowserModule,
        routing,
        CoreModule.forRoot({
            appConfigFile: appConfigFile
        }),
        MaterialModule,
        LoginModule.forRoot(),
        SearchModule.forRoot(),
        DataTableModule.forRoot(),
        DocumentListModule.forRoot(),
        UploadModule.forRoot(),
        ViewerModule.forRoot(),
        ActivitiFormModule.forRoot(),
        ActivitiTaskListModule.forRoot(),
        ActivitiProcessListModule.forRoot(),
        UserInfoComponentModule.forRoot()
    ],
    declarations: [
        AppComponent,
        LoginDemoComponent,
        SentimentComponent,
        CreateFolderDialog,
        SettingsComponent,
        TextAnalysisComponent,
        ImageAnalysisComponent
    ],
    providers: [
        { provide: AppConfigService, useClass: DebugAppConfigService },
        TextAnalyticsService,
        ImageAnalyticsService
    ],
    bootstrap: [ AppComponent ],
    entryComponents: [
        CreateFolderDialog
    ]
})
export class AppModule { }
