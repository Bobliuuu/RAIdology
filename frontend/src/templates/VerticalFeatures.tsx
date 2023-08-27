import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Mission"
    description="To deliver the most accurate and reliable medical results through a single image."
  >
    <VerticalFeatureRow
      title="Seamless User Experience"
      description="Our user-friendly landing page provides easy access to our cutting-edge AI radiology assistant. Say goodbye to complex interfaces, and hello to intuitive interactions."
      image="feature.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Intelligent Ultrasound Analysis"
      description="We Leverage the power of Machine Learning to analyze all ultrasound images accurately and swiftly. Our custom-built AI model examines images with precision, offering detailed insights into the health of both the baby and the parent."
      image="feature-2.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Instant Insights via Chatbot"
      description="Meet your virtual assistant, our Language Model (LLM)-powered chatbot. It translates the AI's findings into easy-to-understand insights. Whether you're curious about your baby's development or seeking information about your own health, our chatbot has you covered."
      image="feature-3.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
