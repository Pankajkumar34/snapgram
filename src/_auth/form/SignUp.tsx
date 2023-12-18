
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import logo_img from '/assets/images/logo.svg'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignupValidation } from "@/lib/validation"
import { z } from "zod"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"
import { createUserAccount } from "@/lib/appwrite/api"
import { ID } from 'appwrite'

export interface SignUpProps{
  autocomplete:string
}
const SignUp: React.FC<SignUpProps>=() => {
  console.log(ID.unique())
  // const isLoding=false
  const form = useForm<z.infer<typeof SignupValidation >>({
    resolver: zodResolver(SignupValidation ),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })
  async function onSubmit(values: z.infer<typeof SignupValidation >) {
   const newUser = await createUserAccount(values)
    console.log(newUser)
  }
  return (
    <>
      <Form {...form}>
        <div className="auth_userForm w-[60%] mx-auto shadow-[0px_1px_16px_3px_white] p-2.5 rounded-[10px]">
          <img src={logo_img} alt="Logo Snapgram" />
          <h2 className="font-bold pt-2 text-white  ">
            Create a new account
          </h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            To use snapgram, Please enter your details
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3 text-white">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter Your Name" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter you name" {...field} />
                  </FormControl>

                  <FormMessage className="text-red-500"/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter you email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password"  autoComplete="off" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-[100%] mx-auto" >
            <Button type="submit" className="bg-primary-500 text-white">
              Sign Up
             </Button>
             <p className="text-center my-2">Already have an account ? <Link to='/sign-in' className="text-primary-500">Log in</Link></p>
            </div>
           
          </form>
        </div>
      </Form>
    </>
  )
}

export default SignUp