"use client";
import * as z from "zod";

import axios from "axios";
import { Admin } from "@prisma/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import ImageUpload from "@/components/Image-Upload";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface AccountUpdateFormProps {
  initialData: Admin | null;
}

type AccountUpdateFormValue = z.infer<typeof formSchema>;

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  password: z.string().min(1, {
    message: "Password is required!",
  }),
  confirmPassword: z.string().min(1, {
    message: "Please confirm your password!",
  }),
  avatar: z.string().min(1),
});

const AccountUpdateForm: React.FC<AccountUpdateFormProps> = ({
  initialData,
}) => {
  //spinner
  const Icons = {
    spinner: Loader2,
  };

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const data = {
    name: initialData?.name || "",
    email: initialData?.email || "",
    password: "",
    confirmPassword: "",
    avatar: initialData?.avatar || "",
  };

  const form = useForm<AccountUpdateFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: data || {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      avatar: "",
    },
  });

  const onSubmitHandler = async (data: AccountUpdateFormValue) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Password not matched!");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.patch(`/api/admin/${initialData?.id}`, data);
      toast.success("User updated!");
      router.refresh();
    } catch (error) {
      console.log("update-form-error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-[70%]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className="space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Avatar <span className="text-red-400">* </span>
                </FormLabel>
                <FormControl>
                  <ImageUpload
                    disabled={loading}
                    onRemove={() => field.onChange("")}
                    onchange={(url) => field.onChange(url)}
                    value={field.value ? [field.value] : []}
                    rounded={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#333]">
                  Name <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter name..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#333]">
                  Email <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter email..."
                    {...field}
                  />
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
                <FormLabel className="text-[#333]">
                  New Password <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter password..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#333]">
                  Confirm Password <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter confirm password..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} size={"lg"} type="submit">
            {loading && <Icons.spinner className="h-4 w-4 animate-spin mr-2" />}
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AccountUpdateForm;
