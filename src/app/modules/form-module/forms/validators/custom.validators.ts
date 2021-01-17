import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class CustomValidators {
    static fakeEmail(control: FormControl): { [key: string]: boolean } {
        if (control.value && !control.value.includes('.com')) {
            return {fakeEmail: true};
        }
        return null;
    }

    static emailExist(control: FormControl): Promise<any> | Observable<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                if (control.value === 'email') {
                    resolve({notUnic: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });

    }
}
