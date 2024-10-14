import mongoose, { Document, Model } from "mongoose";

export interface FAQ {
  title: string;
  body: string;
}

export interface FAQDocument extends FAQ, Document {
  _id: string;
}

const postSchema = new mongoose.Schema<FAQDocument>({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const FAQModel: Model<FAQDocument> =
  mongoose.models.Faq || mongoose.model<FAQDocument>("Faq", postSchema);

export default FAQModel;
