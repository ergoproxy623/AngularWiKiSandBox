/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AdminAbuseControllerService } from './services/admin-abuse-controller.service';
import { AdminAbuseMessagingControllerService } from './services/admin-abuse-messaging-controller.service';
import { ActivityModifyControllerService } from './services/activity-modify-controller.service';
import { AdminGroupedEmailControllerService } from './services/admin-grouped-email-controller.service';
import { QuestionnaireControllerService } from './services/questionnaire-controller.service';
import { CriterionModifyControllerService } from './services/criterion-modify-controller.service';
import { AdminDashboardControllerService } from './services/admin-dashboard-controller.service';
import { EditableOptionsModifyControllerService } from './services/editable-options-modify-controller.service';
import { FaqModifyControllerService } from './services/faq-modify-controller.service';
import { AdminImageModifyControllerService } from './services/admin-image-modify-controller.service';
import { AdminLanguageControllerService } from './services/admin-language-controller.service';
import { AdminLegacyMigrationControllerService } from './services/admin-legacy-migration-controller.service';
import { MaintenanceControllerService } from './services/maintenance-controller.service';
import { AdminManageOrderablesControllerService } from './services/admin-manage-orderables-controller.service';
import { ActivityReadControllerService } from './services/activity-read-controller.service';
import { CommercialContentReadControllerService } from './services/commercial-content-read-controller.service';
import { CriterionReadControllerService } from './services/criterion-read-controller.service';
import { CriterionExchangeControllerService } from './services/criterion-exchange-controller.service';
import { EditableOptionsReadControllerService } from './services/editable-options-read-controller.service';
import { ContactPublicControllerService } from './services/contact-public-controller.service';
import { EventControllerService } from './services/event-controller.service';
import { FaqReadControllerService } from './services/faq-read-controller.service';
import { FeedControllerService } from './services/feed-controller.service';
import { PublicImageControllerService } from './services/public-image-controller.service';
import { LanguageReadControllerService } from './services/language-read-controller.service';
import { RequirementReadControllerService } from './services/requirement-read-controller.service';
import { RestrictedWordControllerService } from './services/restricted-word-controller.service';
import { SettingsReadControllerService } from './services/settings-read-controller.service';
import { SettingsModifyControllerService } from './services/settings-modify-controller.service';
import { SiteContentManagementReadControllerService } from './services/site-content-management-read-controller.service';
import { SiteContentManagementModifyControllerService } from './services/site-content-management-modify-controller.service';
import { SubCriteriaReadControllerService } from './services/sub-criteria-read-controller.service';
import { SubCriterionExchangeControllerService } from './services/sub-criterion-exchange-controller.service';
import { ZipCodeReadControllerService } from './services/zip-code-read-controller.service';
import { RequirementsModifyControllerService } from './services/requirements-modify-controller.service';
import { SubCriteriaModifyControllerService } from './services/sub-criteria-modify-controller.service';
import { AdminEmailTemplateControllerService } from './services/admin-email-template-controller.service';
import { AdminViolationMessageControllerService } from './services/admin-violation-message-controller.service';
import { AdminVocabularyControllerService } from './services/admin-vocabulary-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AdminAbuseControllerService,
    AdminAbuseMessagingControllerService,
    ActivityModifyControllerService,
    AdminGroupedEmailControllerService,
    QuestionnaireControllerService,
    CriterionModifyControllerService,
    AdminDashboardControllerService,
    EditableOptionsModifyControllerService,
    FaqModifyControllerService,
    AdminImageModifyControllerService,
    AdminLanguageControllerService,
    AdminLegacyMigrationControllerService,
    MaintenanceControllerService,
    AdminManageOrderablesControllerService,
    ActivityReadControllerService,
    CommercialContentReadControllerService,
    CriterionReadControllerService,
    CriterionExchangeControllerService,
    EditableOptionsReadControllerService,
    ContactPublicControllerService,
    EventControllerService,
    FaqReadControllerService,
    FeedControllerService,
    PublicImageControllerService,
    LanguageReadControllerService,
    RequirementReadControllerService,
    RestrictedWordControllerService,
    SettingsReadControllerService,
    SettingsModifyControllerService,
    SiteContentManagementReadControllerService,
    SiteContentManagementModifyControllerService,
    SubCriteriaReadControllerService,
    SubCriterionExchangeControllerService,
    ZipCodeReadControllerService,
    RequirementsModifyControllerService,
    SubCriteriaModifyControllerService,
    AdminEmailTemplateControllerService,
    AdminViolationMessageControllerService,
    AdminVocabularyControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
