"use client";
import * as z from "zod";

import { Admin } from "@prisma/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface AccountUpdateFormProps {
  initialData: Admin | null;
}

type AccountUpdateFormValue = z.infer<typeof formSchema>;

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  password: z.string().min(1, "Password is required!"),
  confirmPassword: z.string().min(1),
  imageUrl: z.string().min(1),
});

const AccountUpdateForm: React.FC<AccountUpdateFormProps> = ({
  initialData,
}) => {
  const [loading, setLoading] = useState();

  const form = useForm<AccountUpdateFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      imageUrl: "",
    },
  });

  return <div>AccountUpdateForm</div>;
};

export default AccountUpdateForm;
