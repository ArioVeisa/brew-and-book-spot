
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users, User, Phone, MessageSquare } from "lucide-react";

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real app, you'd send this to your backend or WhatsApp/Telegram API
      console.log('Reservation data:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Reservation Request Sent!",
        description: "We'll contact you shortly to confirm your reservation. Thank you!",
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        notes: ''
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservation" className="py-20 bg-cafe-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cafe-brown mb-4">
            Reserve Your Table
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book your perfect spot for a coffee date, meeting, or special gathering
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-cafe-brown text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Make a Reservation</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-cafe-brown font-medium">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-cafe-brown/30 focus:border-cafe-brown"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-cafe-brown font-medium">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-cafe-brown/30 focus:border-cafe-brown"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-cafe-brown font-medium">
                    <MessageSquare className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-cafe-brown/30 focus:border-cafe-brown"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2 text-cafe-brown font-medium">
                      <Calendar className="w-4 h-4" />
                      Date
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="border-cafe-brown/30 focus:border-cafe-brown"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2 text-cafe-brown font-medium">
                      <Clock className="w-4 h-4" />
                      Time
                    </Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="border-cafe-brown/30 focus:border-cafe-brown"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests" className="flex items-center gap-2 text-cafe-brown font-medium">
                      <Users className="w-4 h-4" />
                      Guests
                    </Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="12"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="border-cafe-brown/30 focus:border-cafe-brown"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-cafe-brown font-medium">
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="border-cafe-brown/30 focus:border-cafe-brown"
                    placeholder="Any dietary restrictions, celebration details, or special arrangements..."
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cafe-brown hover:bg-cafe-brown/90 text-white py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? 'Sending Request...' : 'Send Reservation Request'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
