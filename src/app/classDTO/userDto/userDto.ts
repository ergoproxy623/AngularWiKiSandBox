import {AddressDto, IAddressDto} from '../addressDto/addressDto';

export interface IUserDto {
    name: string;
    age: number;
    address: IAddressDto;
}

export class UserDto implements IUserDto {
    name: string;
    age: number;
    address: AddressDto;
}
