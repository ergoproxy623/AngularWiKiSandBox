import { AddressDto, IAddressDto } from "../addressDto/addressDto";

export interface IUserDto {
    login?: any;
    name: string;
    age: number;
    address: IAddressDto;
    html_url?: any;
    avatar_url?: any;
}

export class UserDto implements IUserDto {
    name: string;
    age: number;
    address: AddressDto;
    html_url?: any;
    avatar_url?: any;
    login?: any;
}
