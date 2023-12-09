"use client";
import * as z from "zod";

import axios from "axios";
import { Service } from "@prisma/client";
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
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

interface ServiceFormProps {
  initialData?: Service | null;
}

type ServiceFormValue = z.infer<typeof formSchema>;

const formSchema = z.object({
  heading: z.string().min(1, {
    message: "Heading is required!",
  }),
  subHeading: z.string().min(1, {
    message: "Sub-Heading is required!",
  }),
  description: z.string().min(1, {
    message: "Description is required!",
  }),
});

const ServiceForm: React.FC<ServiceFormProps> = ({ initialData }) => {
  //spinner
  const Icons = {
    spinner: Loader2,
  };

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<ServiceFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      heading: "",
      subHeading: "",
      description: "",
    },
  });

  const onSubmitHandler = async (data: ServiceFormValue) => {
    try {
      setLoading(true);

      if (initialData) {
        const res = await axios.patch(`/api/admin/service/${initialData.id}`, data);
        toast.success("Service Updated!");
      } else {
        const res = await axios.post(`/api/admin/service/create`, data);
        toast.success("Service Created!");
      }

      router.push("/dashboard/services");
      router.refresh();
    } catch (error) {
      console.log("service-form-error", error);
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
            name="heading"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#333]">
                  Heading <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter heading..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subHeading"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#333]">
                  Sub Heading <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter sub heading..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#333]">
                  Description <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    placeholder="Enter description..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} size={"lg"} type="submit">
            {loading && <Icons.spinner className="h-4 w-4 animate-spin mr-2" />}
            {initialData
              ? "Save Changes"
              : `${loading ? "Creating" : "Create"}`}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ServiceForm;
