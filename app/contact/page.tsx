"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "react-hot-toast";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessType: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        businessType: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      businessType: value,
    }));
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+1 (321) 987-6747",
      description: "Monday - Saturday, 7am - 4pm EST",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "grow@ttmhub.co",
      description: "We respond within 24 hours",
    },
    // {
    //   icon: MapPin,
    //   title: "Headquarters",
    //   details: "30 N Gould St # 51825 Sheridan, WY 82801 USA",
    //   description: "Serving all 50 states",
    // },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Saturday",
      description: "07:00 AM - 04:00 PM EST",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Have questions about starting your business? Our expert team is
                here to help you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <info.icon className="h-12 w-12 text-[#2bb673] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-[#2bb673] font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
       
       <section>
        <div className="container mx-auto px-4">
        <ContactForm />
        </div>
        </section>

       

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-[#2bb673]">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does it take to form my business?",
                  answer:
                    "Most formations are completed within 5-10 business days, depending on the state and business type.",
                },
                {
                  question: "Do I need a registered agent?",
                  answer:
                    "Yes, all businesses must have a registered agent in their state of formation. We provide this service for free with our packages.",
                },
                {
                  question: "What's included in your formation packages?",
                  answer:
                    "Our packages include state filing, registered agent service, operating agreement templates, and ongoing support.",
                },
                {
                  question: "Can you help with ongoing compliance?",
                  answer:
                    "Yes, we offer ongoing compliance services including annual reports, tax reminders, and document management.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-3">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
