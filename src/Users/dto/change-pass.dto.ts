import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class changePass{
  @ApiProperty({
    description:"",
    example:""
  })
@IsString()
@IsNotEmpty()
oldPassword:string

@ApiProperty({
  description:"",
  example:""
})
@IsString()
@IsNotEmpty()
newPassword:string

@ApiProperty({
  description:"",
  example:""
})
@IsString()
@IsNotEmpty()
confirmNewPassword:string

}
