
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Header from "@/components/layout/Header";

// Form validation schema
const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.string().min(1, "Date is required"),
  description: z.string().min(1, "Description is required"),
  content: z.string().min(1, "Content is required"),
  mainImage1: z.string().url("Must be a valid URL"),
  mainImage2: z.string().url("Must be a valid URL"),
  mainImage3: z.string().url("Must be a valid URL"),
  quoteText: z.string(),
  quoteAuthor: z.string(),
  quoteTitle: z.string(),
  quoteImage: z.string().url().optional(),
  calloutTitle: z.string(),
  calloutContent: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const Admin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "A conversation with Maker & Co.",
      date: "Published 13 Jan 2025",
      description: "Maker & Co. are one of our favorite upcoming interior design studios. We caught up with Jules and Mia at their brand new studio to chat about all things design.",
      content: "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.\n\nEget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.",
      mainImage1: "https://cdn.builder.io/api/v1/image/assets/TEMP/316df20255e7790295fbe557962f2233a27bb506?placeholderIfAbsent=true",
      mainImage2: "https://cdn.builder.io/api/v1/image/assets/TEMP/31ee63fcfbbd116ba010b921f2f83a14be50aa35?placeholderIfAbsent=true",
      mainImage3: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a43d277787f7ad6b4ecac5e8c5bdf0bf86ae0f1?placeholderIfAbsent=true",
      quoteText: "In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.",
      quoteAuthor: "Olivia Rhye",
      quoteTitle: "Product Designer",
      quoteImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e63e082976685c4c270ac845a02384064787cea?placeholderIfAbsent=true",
      calloutTitle: "Heading text",
      calloutContent: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.\n\nNunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    try {
      // In a real implementation, this would save to a database
      // For now, we'll save to localStorage
      localStorage.setItem('blogData', JSON.stringify(data));
      toast.success("Content saved successfully");
      navigate('/');
    } catch (error) {
      toast.error("Failed to save content");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-24">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">Blog CMS</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blog Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter blog title" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Publication Date</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Published 13 Jan 2025" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Brief description of the blog post" 
                        {...field}
                        className="min-h-[100px]" 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Gallery Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="mainImage1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image 1 URL</FormLabel>
                        <FormControl>
                          <Input placeholder="Image URL" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mainImage2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image 2 URL</FormLabel>
                        <FormControl>
                          <Input placeholder="Image URL" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mainImage3"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image 3 URL</FormLabel>
                        <FormControl>
                          <Input placeholder="Image URL" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Main Content</h2>
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blog Content</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Write your blog content here" 
                          {...field} 
                          className="min-h-[300px]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Quote</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="quoteText"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quote Text</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter quote text" 
                            {...field}
                            className="min-h-[100px]" 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="quoteAuthor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quote Author</FormLabel>
                          <FormControl>
                            <Input placeholder="Author name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="quoteTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Author Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Author title" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="quoteImage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Author Image URL</FormLabel>
                          <FormControl>
                            <Input placeholder="Image URL" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Callout Box</h2>
                <FormField
                  control={form.control}
                  name="calloutTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Callout Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter callout title" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="calloutContent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Callout Content</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter callout content" 
                            {...field}
                            className="min-h-[150px]" 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="flex justify-end gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate('/')}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
