"use client";
import arrowRight from "@/app/assets/ArrowRight.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  company: z.string(),
  phoneNumber: z.string().min(3, { message: "Invalid phone number" }),
  subject: z.string(),
  message: z.string().min(1, { message: "Message is required" }),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(contactSchema) });
  const sendMessage = async () => {
    try {
      await fetch("api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getValues()),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.error("Error sending contact request:", error);
    }
  };
  return (
    <form className="space-y-5 text-black">
      <div className="flex flex-wrap gap-5 flex-col sm:flex-row">
        <div className="flex flex-col flex-1 w-full">
          <label className="block mb-1" htmlFor="name">
            Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Full name"
            {...register("fullName")}
            className="px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
          {errors && errors.fullName && (
            <span className="text-red-500">
              {errors?.fullName?.message?.toString()}
            </span>
          )}
        </div>
        <div className="flex flex-col flex-1 w-full">
          <label className="block mb-1" htmlFor="email">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Email address"
            className="px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
          {errors && errors.email && (
            <span className="text-red-500">
              {errors?.email?.message?.toString()}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-5 flex-col sm:flex-row">
        <div className="flex flex-col flex-1 w-full">
          <label className="block mb-1" htmlFor="company">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            {...register("company")}
            placeholder="Brand/Company/Product Name"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
          {errors && errors.company && (
            <span className="text-red-500">
              {errors?.company?.message?.toString()}
            </span>
          )}
        </div>
        <div className="flex flex-col flex-1 w-full">
          <label className="block mb-1" htmlFor="phoneNumber">
            Phone Number <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber")}
            placeholder="+201004894245"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
          {errors && errors.phoneNumber && (
            <span className="text-red-500">
              {errors?.phoneNumber?.message?.toString()}
            </span>
          )}
        </div>
      </div>
      <div>
        <label className="block mb-1" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          {...register("subject")}
          id="subject"
          placeholder="Subject"
          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
        {errors && errors.subject && (
          <span className="text-red-500">
            {errors?.subject?.message?.toString()}
          </span>
        )}
      </div>

      <div>
        <label className="block mb-1" htmlFor="message">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your project..."
          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        ></textarea>
        {errors && errors.message && (
          <span className="text-red-500">
            {errors?.message?.message?.toString()}
          </span>
        )}
      </div>
      <button
        type="button"
        disabled={isSubmitting}
        onClick={handleSubmit(sendMessage)}
        className="w-fit bg-primary group gap-2 soft text-white py-4 px-6 center rounded-lg hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-primary"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Image
          src={arrowRight}
          alt="send message"
          width={25}
          height={25}
          className="group-hover:translate-x-2 soft"
        />
      </button>
    </form>
  );
}
export default ContactForm;
