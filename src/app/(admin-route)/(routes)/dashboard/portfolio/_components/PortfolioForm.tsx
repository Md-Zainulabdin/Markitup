"use client";
import * as z from "zod";

import axios from "axios";
import { Portfolio } from "@prisma/client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/Image-Upload";

interface PortfolioFormProps {
  initialData?: Portfolio | null;
}

type PortfolioFormValue = z.infer<typeof formSchema>;

const formSchema = z.object({
  title: z.string().min(1, {
    message: "title is required!",
  }),
  description: z.string().min(1, {
    message: "Description is required!",
  }),
  category: z.string().min(1, {
    message: "Category is required!",
  }),
  imageUrl: z.string().min(1, {
    message: "Image is required!",
  }),
  projectLink: z.string().min(1, {
    message: "Link is required!",
  }),
});

const PortfolioForm: React.FC<PortfolioFormProps> = ({ initialData }) => {
  //spinner
  const Icons = {
    spinner: Loader2,
  };

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<PortfolioFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      category: "",
      description: "",
      imageUrl: "",
      projectLink: "",
    },
  });

  const onSubmitHandler = async (data: PortfolioFormValue) => {
    try {
      setLoading(true);

      if (initialData) {
        const res = await axios.patch(
          `/api/admin/portfolio/${initialData.id}`,
          data
        );
        toast.success("portfolio Updated!");
      } else {
        const res = await axios.post(`/api/admin/portfolio/create`, data);
        toast.success("portfolio Created!");
      }

      router.push("/dashboard/portfolio");
      router.refresh();
    } catch (error) {
      console.log("portfolio-form-error", error);
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
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#333]">
                  Title <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter title..."
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
          <FormField
            control={form.control}
            name="projectLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#333]">
                  Live Link <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter live link..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="VIDEO EDITS">VIDEO EDITS</SelectItem>
                    <SelectItem value="THUMBNAILS">THUMBNAILS</SelectItem>
                    <SelectItem value="AD EDITS">AD EDITS</SelectItem>
                    <SelectItem value="SOCIAL MEDIA CREATIVES">SOCIAL MEDIA CREATIVES</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Project Image <span className="text-red-400">* </span>
                </FormLabel>
                <FormControl>
                  <ImageUpload
                    disabled={loading}
                    onRemove={() => field.onChange("")}
                    onchange={(url) => field.onChange(url)}
                    value={field.value ? [field.value] : []}
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

export default PortfolioForm;
