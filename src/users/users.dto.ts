import { IsEmail, IsString, IsStrongPassword, MinLength } from 'class-validator';

export class SignUpDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(3)
    name: string;

    //Default options: { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
    @IsStrongPassword()
    password: string;
}

export class SignInDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    password: string;
}