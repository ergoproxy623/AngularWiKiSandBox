/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { UserProfileControllerService } from './services/user-profile-controller.service';
import { EmployeeScheduleControllerService } from './services/employee-schedule-controller.service';
import { EmployeeLanguageControllerService } from './services/employee-language-controller.service';
import { EmployeeCriteriaControllerService } from './services/employee-criteria-controller.service';
import { EmployeeAvailabilityModeControllerService } from './services/employee-availability-mode-controller.service';
import { AdminManageUsersControllerService } from './services/admin-manage-users-controller.service';
import { EmployeeFavouriteControllerService } from './services/employee-favourite-controller.service';
import { EmployeeExpiryControllerService } from './services/employee-expiry-controller.service';
import { UserDetailsControllerService } from './services/user-details-controller.service';
import { AdminControllerService } from './services/admin-controller.service';
import { AdminManageControllerService } from './services/admin-manage-controller.service';
import { AdminAbuseControllerService } from './services/admin-abuse-controller.service';
import { UserRegistrationControllerService } from './services/user-registration-controller.service';
import { EmployeeRadarControllerService } from './services/employee-radar-controller.service';
import { EmployeeSearchControllerService } from './services/employee-search-controller.service';
import { UserResetPasswordControllerService } from './services/user-reset-password-controller.service';
import { EmployeeAbuseControllerService } from './services/employee-abuse-controller.service';
import { EmployeeAboutMeControllerService } from './services/employee-about-me-controller.service';
import { UserImageControllerService } from './services/user-image-controller.service';
import { UserReplyControllerService } from './services/user-reply-controller.service';
import { AdminAdvertisementControllerService } from './services/admin-advertisement-controller.service';
import { EmployeeControllerService } from './services/employee-controller.service';
import { UserPublicControllerService } from './services/user-public-controller.service';
import { EmployeeDefaultAreaControllerService } from './services/employee-default-area-controller.service';
import { EmployeeAvailabilityZoneControllerService } from './services/employee-availability-zone-controller.service';
import { UserLogoutControllerService } from './services/user-logout-controller.service';
import { AdminManageLegacyControllerService } from './services/admin-manage-legacy-controller.service';

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
    UserProfileControllerService,
    EmployeeScheduleControllerService,
    EmployeeLanguageControllerService,
    EmployeeCriteriaControllerService,
    EmployeeAvailabilityModeControllerService,
    AdminManageUsersControllerService,
    EmployeeFavouriteControllerService,
    EmployeeExpiryControllerService,
    UserDetailsControllerService,
    AdminControllerService,
    AdminManageControllerService,
    AdminAbuseControllerService,
    UserRegistrationControllerService,
    EmployeeRadarControllerService,
    EmployeeSearchControllerService,
    UserResetPasswordControllerService,
    EmployeeAbuseControllerService,
    EmployeeAboutMeControllerService,
    UserImageControllerService,
    UserReplyControllerService,
    AdminAdvertisementControllerService,
    EmployeeControllerService,
    UserPublicControllerService,
    EmployeeDefaultAreaControllerService,
    EmployeeAvailabilityZoneControllerService,
    UserLogoutControllerService,
    AdminManageLegacyControllerService
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
