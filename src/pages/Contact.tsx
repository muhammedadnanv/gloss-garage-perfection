import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
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

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20),
  carModel: z.string().trim().min(2, "Please enter your car model").max(100),
  serviceType: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  message: z.string().trim().max(500).optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      carModel: "",
      serviceType: "",
      date: "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `New Booking Request:\n\nName: ${data.name}\nPhone: ${data.phone}\nVehicle Model: ${data.carModel}\nService: ${data.serviceType}\nPreferred Date: ${data.date}\n${data.message ? `Message: ${data.message}` : ''}`
    );
    
    // Open WhatsApp with G4 Detailing Studio number
    window.open(`https://wa.me/917025346580?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Near Register Office, Naduvannur, Calicut, Kerala, India",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "7025346580",
    },
    {
      icon: Mail,
      title: "Hours",
      content: "9:30 AM - 7:30 PM (Daily)",
    },
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-4 sm:mb-6">
            Book Your <span className="text-accent">Service</span>
          </h1>
          <p className="text-muted-foreground font-montserrat text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">
            Contact G4 Detailing Studio for car & bike detailing and premium accessories. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-poppins font-bold text-foreground mb-5 sm:mb-6">
                Booking Form
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-montserrat">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-background border-border font-montserrat"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-montserrat">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1 (234) 567-8900"
                            className="bg-background border-border font-montserrat"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="carModel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-montserrat">Vehicle Model</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Honda City / Royal Enfield Classic"
                            className="bg-background border-border font-montserrat"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-montserrat">Service Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border font-montserrat">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="graphene">Graphene & Ceramic Coating</SelectItem>
                            <SelectItem value="3m-polish">3M Polishing</SelectItem>
                            <SelectItem value="ppf">PPF Coating</SelectItem>
                            <SelectItem value="seat-covers">Premium Seat Covers</SelectItem>
                            <SelectItem value="accessories">Car & Bike Accessories</SelectItem>
                            <SelectItem value="stickers">Custom Sticker Works</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-montserrat">Preferred Date</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="bg-background border-border font-montserrat"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-montserrat">Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any special requests or concerns?"
                            className="bg-background border-border font-montserrat resize-none"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-accent font-poppins font-semibold text-lg hover:shadow-glow transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Book Appointment"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 animate-slide-in-right">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="bg-card border border-border rounded-xl p-4 sm:p-5 lg:p-6 flex items-start space-x-3 sm:space-x-4 hover:border-accent transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-shine rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-poppins font-bold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground font-montserrat text-sm sm:text-base">{info.content}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/917025346580"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 sm:space-x-3 bg-green-600 hover:bg-green-700 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-xl transition-all duration-300 shadow-premium hover:shadow-glow"
            >
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
              <span className="font-poppins font-semibold text-sm sm:text-base">Chat on WhatsApp</span>
            </a>

            {/* Map Placeholder */}
            <div className="bg-card border border-border rounded-xl overflow-hidden h-56 sm:h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.0!2d75.75!3d11.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM5JzAwLjAiTiA3NcKwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="G4 Detailing Studio Location - Naduvannur, Calicut"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
