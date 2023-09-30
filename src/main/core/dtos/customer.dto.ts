import { IsString, IsNotEmpty, MinLength, MaxLength, IsEmail, Length } from "class-validator"

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty({
    message: 'Name is Empty'
  })
  @MinLength(3, {
    message: 'name is too short'
  })
  @MaxLength(20, {
    message: 'Name is too long'
  })
  name: string

  @IsString()
  @IsNotEmpty({
    message: 'Email is empty'
  })
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty({
    message: 'Phone is empty'
  })
  @Length(11)
  phone: string
}