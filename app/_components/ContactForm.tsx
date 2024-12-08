"use client";
import arrowRight from "@/app/assets/ArrowRight.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslations } from "next-intl";

const contactSchema = z.object({
  fullName: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  company: z.string(),
  phoneNumber: z.string().min(3, { message: "Invalid phone number" }),
  subject: z.string(),
  message: z.string().min(1, { message: "Message is required" }),
});

function ContactForm() {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
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
            {t("Name")} <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder={t("Full name")}
            {...register("fullName")}
            className="px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
          {errors && errors.fullName && (
            <span className="text-red-500">
              {t(errors?.fullName?.message?.toString())}
            </span>
          )}
        </div>
        <div className="flex flex-col flex-1 w-full">
          <label className="block mb-1" htmlFor="email">
            {t("Email")} <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder={t("Email address")}
            className="px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
          {errors && errors.email && (
            <span className="text-red-500">
              {t(errors?.email?.message?.toString())}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-5 flex-col sm:flex-row">
        <div className="flex flex-col flex-1 w-full">
          <label className="block mb-1" htmlFor="company">
            {t("Company Name")}
          </label>
          <input
            type="text"
            id="company"
            {...register("company")}
            placeholder={t("Brand/Company/Product Name")}
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
          {errors && errors.company && (
            <span className="text-red-500">
              {t(errors?.company?.message?.toString())}
            </span>
          )}
        </div>
        <div className="flex flex-col flex-1 w-full">
          <label className="block mb-1" htmlFor="phoneNumber">
            {t("Phone Number")} <span className="text-primary">*</span>
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
              {t(errors?.phoneNumber?.message?.toString())}
            </span>
          )}
        </div>
      </div>
      <div>
        <label className="block mb-1" htmlFor="subject">
          {t("Subject")}
        </label>
        <input
          type="text"
          {...register("subject")}
          id="subject"
          placeholder={t("Subject")}
          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
        {errors && errors.subject && (
          <span className="text-red-500">
            {t(errors?.subject?.message?.toString())}
          </span>
        )}
      </div>

      <div>
        <label className="block mb-1" htmlFor="message">
          {t("Message")} <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder={t("Tell us about your project")}
          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        ></textarea>
        {errors && errors.message && (
          <span className="text-red-500">
            {t(errors?.message?.message?.toString())}
          </span>
        )}
      </div>
      <div className="flex items-center gap-5">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={handleSubmit(sendMessage)}
          className="w-fit bg-primary group gap-2 soft text-white py-4 px-6 center rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
        >
          {isSubmitting ? t("Sending") : t("Send Message")}
          <Image
            src={arrowRight}
            alt={t("send message")}
            width={25}
            height={25}
            className="group-hover:translate-x-2 soft rtl:group-hover:-translate-x-2 rtl:rotate-180"
          />
        </button>
        {isSubmitSuccessful && isSubmitted && (
          <span className="text-green-500">{t("Message sent successfully!")}</span>
        )}
      </div>
    </form>
  );
}
export default ContactForm;
