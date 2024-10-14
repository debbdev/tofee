import mongoose, { Document, Model } from "mongoose";

// Blog interface
export interface Blog {
  heading: string;
  blogText: string;
  img: string;
  time: string;
}

export interface BlogDocument extends Blog, Document {
  _id: string;
}

const blogSchema = new mongoose.Schema<BlogDocument>({
  heading: {
    type: String,
    required: true,
  },
  blogText: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const BlogModel: Model<BlogDocument> =
  mongoose.models.Blog || mongoose.model<BlogDocument>("Blog", blogSchema);

export default BlogModel;
