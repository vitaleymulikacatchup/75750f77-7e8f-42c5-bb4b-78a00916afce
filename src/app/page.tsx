"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="small"
      background="animatedAurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="MediCare Cannabis"
          button={{
            text: "Contact Us",
            href: "contact"
          }}
          className="bg-background border-b border-accent"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Medical Cannabis for Wellness"
          description="Licensed medical cannabis products with full compliance and patient support. Browse our carefully curated selection of therapeutic strains."
          tag="Licensed Medical Provider"
          imageSrc="https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004324973-1em06n6z.jpg"
          imageAlt="Medical cannabis laboratory environment"
          frameStyle="card"
          buttons={[
            {
              text: "Browse Products",
              href: "products"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          className="py-16 md:py-24"
          titleClassName="text-4xl md:text-6xl font-bold"
          descriptionClassName="text-lg md:text-xl max-w-2xl mx-auto"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Medical Products"
          description="Carefully selected strains and products for therapeutic use. All items are lab-tested and fully compliant."
          textboxLayout="default"
          tag="Lab Tested"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "MediCare Labs",
              name: "Blue Dream - Pain Relief",
              price: "$45.00",
              rating: 5,
              reviewCount: "342",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004326078-56prr51d.jpg",
              imageAlt: "Blue Dream cannabis strain"
            },
            {
              id: "2",
              brand: "MediCare Labs",
              name: "Golden Oil - Sleep Support",
              price: "$65.00",
              rating: 5,
              reviewCount: "287",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004327547-dmnfnqj9.jpg",
              imageAlt: "Golden Oil cannabis extract"
            },
            {
              id: "3",
              brand: "MediCare Labs",
              name: "Relief Gummies - Inflammation",
              price: "$35.00",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004328547-m7vus91z.jpg",
              imageAlt: "Medical cannabis edible gummies"
            }
          ]}
          className="py-20"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="How Medical Cannabis Works"
          description="Understanding therapeutic benefits and proper usage"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Initial Consultation",
              description: "Schedule a confidential consultation with our medical team to discuss your health needs and treatment goals",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004330268-l7pxz3jv.jpg"
            },
            {
              id: 2,
              title: "Product Selection",
              description: "Choose from our curated selection of strains and products tailored to your therapeutic requirements",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004327547-dmnfnqj9.jpg"
            },
            {
              id: 3,
              title: "Ongoing Support",
              description: "Receive professional guidance and dosage recommendations throughout your wellness journey",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004329470-332kjfpq.jpg"
            }
          ]}
          className="py-20"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Patient Success Stories"
          description="Real experiences from patients finding relief with our medical cannabis products"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Chronic Pain Patient",
              company: "San Francisco, CA",
              rating: 5,
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004329470-332kjfpq.jpg"
            },
            {
              id: "2",
              name: "Dr. James Chen",
              role: "Medical Professional",
              company: "Oakland, CA",
              rating: 5,
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004330268-l7pxz3jv.jpg"
            },
            {
              id: "3",
              name: "Michelle Rodriguez",
              role: "Sleep Wellness",
              company: "Berkeley, CA",
              rating: 5,
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004331089-4om4zv0o.jpg"
            },
            {
              id: "4",
              name: "Robert Thompson",
              role: "Anxiety Relief",
              company: "San Jose, CA",
              rating: 5,
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004331928-646cyljs.jpg"
            }
          ]}
          className="py-20"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Important information about medical cannabis, compliance, and our products"
          textboxLayout="default"
          mediaPosition="right"
          imageSrc="https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004332785-su7kc4iw.jpg"
          imageAlt="Medical cannabis information and guidance"
          faqs={[
            {
              id: "1",
              title: "Do I need a medical card?",
              content: "Yes, patients must have a valid medical marijuana card issued by their state. We verify all documentation to ensure compliance with local regulations."
            },
            {
              id: "2",
              title: "What are the therapeutic benefits?",
              content: "Medical cannabis has been used to help manage chronic pain, anxiety, sleep disorders, inflammation, and other conditions. Consult with our medical team for personalized guidance."
            },
            {
              id: "3",
              title: "How do I choose the right product?",
              content: "Our knowledgeable staff will help match you with products based on your health goals. We offer strains, oils, edibles, and other formats to suit your needs."
            },
            {
              id: "4",
              title: "Are your products lab-tested?",
              content: "Absolutely. All our products undergo rigorous third-party lab testing for potency, purity, and contaminants to ensure the highest quality and safety standards."
            },
            {
              id: "5",
              title: "What about dosing recommendations?",
              content: "Our medical professionals provide personalized dosing guidance based on your individual health profile, tolerance, and therapeutic goals."
            },
            {
              id: "6",
              title: "Do you offer home delivery?",
              content: "We provide discreet, compliant delivery options for verified patients in our service areas. All deliveries are tracked and require ID verification."
            }
          ]}
          className="py-20"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Informed"
          title="Get Updates About New Products"
          description="Subscribe to our newsletter for information about new medical cannabis products, wellness tips, and exclusive patient resources."
          imageSrc="https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004324973-1em06n6z.jpg"
          imageAlt="Medical cannabis wellness updates"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about our medical products and services. We respect your privacy and comply with all regulations."
          className="py-20"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="MediCare Cannabis"
          copyrightText="© 2025 MediCare Cannabis. All rights reserved. Licensed medical cannabis provider."
          columns={[
            {
              title: "Products",
              items: [
                {
                  label: "Strains",
                  href: "products"
                },
                {
                  label: "Oils & Extracts",
                  href: "products"
                },
                {
                  label: "Edibles",
                  href: "products"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Compliance",
                  href: "compliance"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Terms & Conditions",
                  href: "terms"
                },
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Medical Disclaimer",
                  href: "disclaimer"
                }
              ]
            }
          ]}
          className="bg-primary-cta text-secondary-cta"
        />
      </div>
    </ThemeProvider>
  );
}