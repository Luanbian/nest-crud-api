import { CreateCustomerDto } from "../core/dtos/customer.dto";

export class Customer {
  readonly name: string
  readonly email: string
  readonly phone: string

  private constructor (props: CreateCustomerDto) {
    this.name = props.name
    this.email = props.email
    this.phone = props.phone
  }
  
  static create (input: CreateCustomerDto) {
    return new Customer(input)
  }
}