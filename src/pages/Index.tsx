import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogImageGallery from "@/components/blog/BlogImageGallery";
import BlogContent, {
  BlogSection,
  BlogSubsection,
  BlogCallout,
} from "@/components/blog/BlogContent";
import BlogQuote from "@/components/blog/BlogQuote";
import BlogImage from "@/components/blog/BlogImage";
import RelatedPosts from "@/components/blog/RelatedPosts";
import CTASection from "@/components/shared/CTASection";
import NewsletterSection from "@/components/shared/NewsletterSection";
import Divider from "@/components/shared/Divider";

const Index = () => {
  // Blog content
  const blogContent = (
    <>
      <BlogSection title="Introduction">
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
        suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
        montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
        vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
        varius id.
        <br />
        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis
        at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce
        augue enim. Quis at habitant diam at. Suscipit tristique risus, at
        donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales
        id est ac volutpat.{" "}
      </BlogSection>

      <div className="w-full text-sm text-[#535862] font-normal leading-none max-md:max-w-full">
        <div className="flex min-h-12 w-full max-md:max-w-full" />
        <BlogImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/746737b0a0733016e492269e28d6de15a10bfe7f?placeholderIfAbsent=true"
          caption="Image courtesy of Laura Davidson via"
          creditUrl="https://unsplash.com/photos/QBAH4IldaZY"
          creditText="Unsplash"
        />
        <div className="flex min-h-12 w-full max-md:max-w-full" />
      </div>

      <div className="w-full max-md:max-w-full">
        <BlogQuote
          quote={
            '"In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear."'
          }
          authorName="Olivia Rhye"
          authorTitle="Product Designer"
          authorImage="https://cdn.builder.io/api/v1/image/assets/TEMP/1e63e082976685c4c270ac845a02384064787cea?placeholderIfAbsent=true"
        />
        <div className="flex min-h-12 w-full max-md:max-w-full" />
      </div>

      <div className="w-full text-lg text-[#535862] font-normal leading-7 max-md:max-w-full">
        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio
        nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi
        bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        <br />
        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
        commodo consectetur convallis risus. Sed condimentum enim dignissim
        adipiscing faucibus consequat, urna. Viverra purus et erat auctor
        aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
        aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
        ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc
        lectus in tellus, pharetra, porttitor.
        <br />
        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.
        Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie
        sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut
        tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
      </div>

      <BlogSubsection title="Software and tools">
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
        suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
        montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
        vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
        varius id.
        <br />
        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis
        at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce
        augue enim. Quis at habitant diam at. Suscipit tristique risus, at
        donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales
        id est ac volutpat.{" "}
      </BlogSubsection>

      <BlogSubsection title="Other resources">
        Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas
        sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum
        lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at
        diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus
        vulputate gravida id. Sed quis auctor vulputate hac elementum gravida
        cursus dis.
        <br />
        Lectus id duis vitae porttitor enim gravida morbi.
        <br />
        Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse.
        Auctor vel in vitae placerat.
        <br />
        Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
      </BlogSubsection>

      <div className="w-full text-sm text-[#535862] font-normal leading-none max-md:max-w-full">
        <div className="flex min-h-12 w-full max-md:max-w-full" />
        <BlogImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/953b5767cb2aa62d02d0b7f08b613c3d28a02580?placeholderIfAbsent=true"
          caption="Image courtesy of Helena Lopes via"
          creditUrl="https://www.pexels.com/photo/short-coated-tan-dog-2253275/"
          creditText="Pexels"
        />
        <div className="flex min-h-12 w-full max-md:max-w-full" />
      </div>

      <div className="w-full text-lg text-[#535862] font-normal leading-7 max-md:max-w-full">
        Lectus leo massa amet posuere. Malesuada mattis non convallis quisque.
        Libero sit et imperdiet bibendum quisque dictum vestibulum in non.
        Pretium ultricies tempor non est diam. Enim ut enim amet amet integer
        cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
        <br />
        Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit
        duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam
        tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan.
        Cursus viverra aenean magna risus elementum faucibus molestie
        pellentesque. Arcu ultricies sed mauris vestibulum.
      </div>

      <BlogCallout title="Heading text">
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
        scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit
        elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque
        amet nulla purus habitasse.
        <br />
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
        condimentum mi massa. In tincidunt pharetra consectetur sed duis
        facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
        dictum eget nibh tortor commodo cursus.
        <br />
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet.
        Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget
        ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec
        posuere pharetra odio consequat scelerisque et, nunc tortor.
      </BlogCallout>
    </>
  );

  // Related blog posts data
  const relatedPosts = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57115f67e859ba1f9b3e70e39d32830eed9053d8?placeholderIfAbsent=true",
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/71fb64efa135ee659b23e428d2f759d632944cf0?placeholderIfAbsent=true",
      authorName: "Olivia Rhye",
      date: "20 Jan 2025",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8839bfd242689fd0361c960cdbaf0a5c6cad0284?placeholderIfAbsent=true",
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5a9d4d2ad0610c19817f574e52673b7e4ff1dfa9?placeholderIfAbsent=true",
      authorName: "Phoenix Baker",
      date: "19 Jan 2025",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/41351432d0160a7b915ef5728bb655a2d5bdf9a1?placeholderIfAbsent=true",
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/91af65cbbfdbc716b254baad3281ab29fb60de6c?placeholderIfAbsent=true",
      authorName: "Lana Steiner",
      date: "18 Jan 2025",
    },
  ];

  // CTA section images
  const ctaImages = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/49983ab84e695cc954c9aa117016bedd50198950?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f3df278c2fa71243782041f9847a9dbd6f4c1a3d?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/da7d1122f1b1cac67cbe4372be69df833935bd29?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0a2200d738843d1b74a1f1335957ea8c2008ad40?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/8e3726103198ac0592961110989a71ae1b5932ab?placeholderIfAbsent=true",
  ];

  return (
    <div className="bg-white overflow-hidden">
      <div className="w-full max-md:max-w-full">
        <Header />
      </div>
      <div className="bg-white w-full overflow-hidden max-md:max-w-full">
        <BlogHeader
          date="Published 13 Jan 2025"
          title="A conversation with Maker & Co."
          description="Maker & Co. are one of our favorite upcoming interior design studios. We caught up with Jules and Mia at their brand new studio to chat about all things design."
        />
        <BlogImageGallery
          images={[
            "https://cdn.builder.io/api/v1/image/assets/TEMP/316df20255e7790295fbe557962f2233a27bb506?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/31ee63fcfbbd116ba010b921f2f83a14be50aa35?placeholderIfAbsent=true",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/8a43d277787f7ad6b4ecac5e8c5bdf0bf86ae0f1?placeholderIfAbsent=true",
          ]}
        />
        <BlogContent content={blogContent} />
      </div>
      <Divider />
      <RelatedPosts
        subtitle="Our blog"
        title="Lastest blog posts"
        description="Tool and strategies modern teams need to help their companies grow."
        posts={relatedPosts}
      />
      <Divider />
      <CTASection
        title="No long-term contracts.No catches."
        description="Start your 30-day free trial today."
        primaryButtonText="Get started"
        secondaryButtonText="Learn more"
        images={ctaImages}
      />
      <NewsletterSection
        title="Join 2,000+ subscribers"
        description="Stay in the loop with everything you need to know."
        buttonText="Subscribe"
        privacyText="We care about your data in our privacy policy."
      />
      <Footer />
    </div>
  );
};

export default Index;
