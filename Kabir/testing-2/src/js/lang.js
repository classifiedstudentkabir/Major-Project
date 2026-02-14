/**
 * lang.js
 * Handles language switching logic using JSON files.
 * Default language: English (en)
 */

document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('lang-switcher');
    const defaultLang = 'en';

    // 1. Check if language is already stored in localStorage, otherwise use default
    // Note: We are using a simple approach for now, no complex locale detection
    const currentLang = localStorage.getItem('site_lang') || defaultLang;

    // 2. Set the dropdown value
    if (langSwitcher) {
        langSwitcher.value = currentLang;

        // 3. Listen for changes (only real user interactions)
        langSwitcher.addEventListener('change', (e) => {
            if (!e.isTrusted) {
                const storedLang = localStorage.getItem('site_lang') || defaultLang;
                langSwitcher.value = storedLang;
                return;
            }

            const selectedLang = e.target.value;
            console.log(`User changed language to: ${selectedLang}`);
            setLanguage(selectedLang);
        });
    }

    // 4. Initial load
    setLanguage(currentLang);
});

/**
 * Loads the JSON file for the requested language and updates the DOM.
 * @param {string} lang - 'en', 'hi', or 'mr'
 */
// Embedded translations for file:// protocol support or fallback
const translationsFallback = {
    en: {
        "header": {
            "brand": "Krishna Enterprises",
            "contact_phone": "Call: +91 8898470483 / +91 9322874711",
            "contact_email": "krishnaenterprises1001@gmail.com",
            "logo": "Krishna Enterprises",
            "cta": "Get Started"
        },
        "nav": {
            "home": "Home",
            "about": "About Us",
            "services": "Services",
            "projects": "Projects",
            "pages": "Pages",
            "faq": "FAQ",
            "contact": "Contact Us",
            "blog": "Blog",
            "footer_about_title": "Krishna Enterprises",
            "footer_about_desc": "Leading construction and interior design firm dedicated to quality and excellence.",
            "footer_quick_links": "Quick Links",
            "footer_services": "Services",
            "footer_contact": "Contact Info",
            "footer_address": "Opp. Saibaba Mandir, Kamothe, Navi Mumbai",
            "footer_phone": "+91 123 456 7890",
            "footer_email": "info@krishnaenterprises.com",
            "service_civil": "Civil Contracting",
            "service_fabrication": "Fabrication Work",
            "service_interior": "Interior Design",
            "service_aluminium": "Aluminium Work",
            "pages_faq_title": "FAQ",
            "pages_faq_desc": "Get answers to common queries",
            "pages_civil_title": "Civil Contracting",
            "pages_civil_desc": "Expert construction services",
            "pages_residential_title": "Residential Complex",
            "pages_residential_desc": "Explore modern living spaces",
            "pages_renovation_title": "Home Renovation",
            "pages_renovation_desc": "Tips for transforming your home"
        },
        "hero": {
            "subtitle": "Welcome to Krishna Enterprises",
            "title": "Quality Civil & Interior Works For Your Home",
            "description": "From steel grills to aluminium windows and custom furniture, we deliver dependable civil work with clean finishing.",
            "cta_primary": "Start Project",
            "cta_secondary": "Watch Video",
            "badge_number": "500+",
            "badge_label": "Happy Clients"
        },
        "about": {
            "section_title": "About Us",
            "headline": "We Work To Create Buildings That Are Functional, Safe, Comfortable",
            "description": "Lorem vero conubia vehicula. Blandit ultricies nullam ullamcorper arcu. Sit sit sapien nisi ac pulvinar cursus. Feugiat mauris donec.",
            "xp_number": "15+",
            "xp_label": "Years Experience",
            "feature1_title": "Environmentally Friendly",
            "feature2_title": "Technology Integration",
            "cta": "About Us"
        },
        "services": {
            "section_title": "Service",
            "headline": "Our Services For Your <br> Construction Needs",
            "description": "Lorem ipsum dolor sit amet consectetur. Blandit ultricies nullam ullamcorper arcu.",
            "card1_title": "M.S. Fabrication",
            "card1_desc": "Gates, grills, railings, and steel structural work with strong welds and clean finish.",
            "card2_title": "Aluminium Works",
            "card2_desc": "Sliding windows, partitions, and frames built for smooth function and durability.",
            "card3_title": "Interior Decor & Furniture",
            "card3_desc": "Custom furniture, polish, and painting that makes your home look finished."
        },
        "common": {
            "read_more": "Read More"
        },
        "contact_page": {
            "title": "Contact Us",
            "subtitle": "Get In Touch",
            "address_label": "Address",
            "address_value": "Opp. Saibaba Mandir, Kamothe, Navi Mumbai",
            "phone_label": "Phone",
            "email_label": "Email",
            "form_title": "Send us a message",
            "form_name": "Name",
            "form_email": "Email",
            "form_message": "Message",
            "form_submit": "Send Message"
        },
        "about_page": {
            "title": "About Us",
            "subtitle": "Who We Are",
            "intro_title": "Providing Quality Civil & Interior Services",
            "experience_since": "Since 2010",
            "team_image_label": "Krishna Enterprises Team",
            "intro_desc_1": "Krishna Enterprises is a leading provider of civil contracting, fabrication, aluminium work, and interior design services. We are committed to delivering high-quality construction solutions that meet the diverse needs of our clients.",
            "intro_desc_2": "With years of experience in the industry, we pride ourselves on our attention to detail, timely completion of projects, and customer satisfaction.",
            "mission_title": "Our Mission",
            "mission_desc": "To deliver superior construction and design services with integrity, innovation, and excellence.",
            "vision_title": "Our Vision",
            "vision_desc": "To be the most trusted name in the civil and interior infrastructure industry.",
            "services_title": "Our Core Expertise",
            "service_civil": "Civil Contracting",
            "service_fabrication": "Fabrication Work",
            "service_aluminium": "Aluminium Sliding Windows",
            "service_interior": "Interior Decor & Furniture"
        },
        "services_page": {
            "title": "Our Services",
            "subtitle": "What We Do",
            "civil_title": "Civil Contracting",
            "civil_desc": "Complete civil construction services including structural work, renovations, and repairs. We ensure structural integrity and durability in all our projects.",
            "fabrication_title": "Fabrication Work",
            "fabrication_desc": "Custom metal fabrication for gates, grills, railings, and structural steel needs. Precision and strength are our top priorities.",
            "aluminium_title": "Aluminium Work",
            "aluminium_desc": "Modern aluminium sliding windows, partitions, and doors that offer aesthetics, durability, and smooth functionality for homes and offices.",
            "interior_title": "Interior Decor & Furniture",
            "interior_desc": "Transform your space with our interior design and custom furniture solutions. We create beautiful, functional environments tailored to your taste."
        },
        "projects_page": {
            "title": "Our Projects",
            "subtitle": "Portfolio",
            "project_1_title": "Residential Complex Structure",
            "project_1_cat": "Civil Construction",
            "project_2_title": "Modern Office Interior",
            "project_2_cat": "Interior Design",
            "project_3_title": "Industrial Shed Fabrication",
            "project_3_cat": "Fabrication",
            "project_4_title": "Custom Aluminium Windows",
            "project_4_cat": "Aluminium Work",
            "project_5_title": "Villa Renovation",
            "project_5_cat": "Civil Construction",
            "project_6_title": "Safety Grills & Gates",
            "project_6_cat": "Fabrication"
        },
        "blog_page": {
            "title": "Our Blog",
            "subtitle": "Latest News & Insights",
            "read_more": "Read More",
            "blog_1_title": "5 Tips for Home Renovation",
            "blog_1_date": "January 15, 2026",
            "blog_1_excerpt": "Planning a renovation? Here are the top 5 things you need to consider before starting your dream home makeover.",
            "blog_2_title": "Benefits of Aluminium Windows",
            "blog_2_date": "January 10, 2026",
            "blog_2_excerpt": "Why modern homes are switching to aluminium sliding windows for durability and aesthetics.",
            "blog_3_title": "Safety First in Construction",
            "blog_3_date": "January 05, 2026",
            "blog_3_excerpt": "How we ensure the highest safety standards at all our construction sites to protect our workers and clients."
        },
        "faq_page": {
            "title": "Frequently Asked Questions",
            "subtitle": "Common Questions",
            "q1": "What types of civil work do you undertake?",
            "a1": "We undertake all types of civil contracting work including residential complexes, commercial buildings, structural repairs, and renovations.",
            "q2": "Do you provide custom fabrication solutions?",
            "a2": "Yes, we specialize in custom metal fabrication for gates, grills, railings, and structural steel needs tailored to your specific requirements.",
            "q3": "What is the warranty on aluminium windows?",
            "a3": "Our aluminium sliding windows come with a standard 5-year warranty on the profile and 1-year warranty on hardware components.",
            "q4": "How do you charge for your services?",
            "a4": "Our pricing is transparent and project-based. We provide a detailed quotation after inspecting the site and understanding your requirements.",
            "q5": "What is the typical timeline for a project?",
            "a5": "Timelines vary depending on the scope. Small renovations may take 2-4 weeks, while larger construction projects can take several months. We provide a schedule before starting."
        },
        "single_service_page": {
            "title": "Civil Contracting",
            "subtitle": "Service Details",
            "description_1": "Our civil contracting services act as the backbone of your construction project. We handle everything from the initial foundation to the final structural finishes, ensuring improved stability and longevity.",
            "description_2": "We specialize in residential and commercial building construction, leveraging modern techniques and high-quality materials to deliver superior results.",
            "features_title": "Key Features",
            "feature_1": "Structural Analysis & Design",
            "feature_2": "Concrete & Masonry Work",
            "feature_3": "Waterproofing Solutions",
            "feature_4": "Renovation & Rehabilitation",
            "cta_button": "Get a Quote"
        },
        "single_project_page": {
            "title": "Residential Complex",
            "subtitle": "Project Details",
            "description_1": "This comprehensive residential complex project involved the construction of 5 interconnected towers with over 200 units. Our team managed the entire lifecycle from structural skeleton to premium finishing.",
            "description_2": "The project emphasizes sustainable living with eco-friendly materials, rainwater harvesting systems, and energy-efficient lighting installed throughout the common areas.",
            "info_title": "Project Info",
            "info_type": "Type",
            "info_location": "Location",
            "info_scope": "Scope",
            "info_status": "Status",
            "val_type": "Civil Construction",
            "val_location": "Navi Mumbai",
            "val_scope": "5 Towers, 200+ Units",
            "val_status": "Completed",
            "gallery_title": "Project Gallery",
            "cta_button": "Start Your Project"
        },
        "single_blog_page": {
            "title": "5 Tips for Home Renovation",
            "subtitle": "Blog Details",
            "meta_date": "January 15, 2026",
            "meta_category": "Renovation",
            "quote": "Renovation is not just about changing the look, it is about improving the way you live.",
            "content_1": "Planning a home renovation can be both exciting and overwhelming. Whether you are updating a single room or remodeling your entire house, proper planning is key to a successful project. Here are 5 essential tips to get you started.",
            "content_2": "First, establish a realistic budget. It is important to know how much you are willing to spend and to set aside a contingency fund for unexpected expenses. Second, prioritize your needs versus your wants. Focus on essential repairs and improvements that add value to your home.",
            "content_3": "Third, hire the right professionals. A skilled contractor can make a huge difference in the quality and timeline of your project. Fourth, consider energy efficiency. Upgrading to energy-efficient windows and appliances can save you money in the long run.",
            "content_4": "Finally, be patient. Renovations take time, and there will likely be some disruptions to your daily routine. Keep the end goal in mind and enjoy the process of transforming your home.",
            "tags_title": "Tags",
            "tag_1": "Renovation",
            "tag_2": "Construction",
            "tag_3": "Interior Design",
            "back_to_blog": "Back to Blog"
        },
        "footer": {
            "copyright": "© 2026 Krishna Enterprises. All rights reserved.",
            "about_title": "Krishna Enterprises",
            "about_desc": "Leading construction and interior design firm dedicated to quality and excellence.",
            "quick_links": "Quick Links",
            "services": "Services",
            "contact": "Contact Info",
            "address": "Opp. Saibaba Mandir, Kamothe, Navi Mumbai",
            "phone": "+91 8898470483",
            "email": "krishnaenterprises1001@gmail.com",
            "service_civil": "Civil Contracting",
            "service_fabrication": "Fabrication Work",
            "service_interior": "Interior Design",
            "service_aluminium": "Aluminium Work"
        }
    },
    hi: {
        "header": {
            "brand": "कृष्णा एंटरप्राइजेज",
            "contact_phone": "कॉल: +91 8898470483 / +91 9322874711",
            "contact_email": "krishnaenterprises1001@gmail.com",
            "logo": "कृष्णा एंटरप्राइजेज",
            "cta": "शुरू करें"
        },
        "nav": {
            "home": "होम",
            "about": "हमारे बारे में",
            "services": "सेवाएं",
            "projects": "परियोजनाएं",
            "pages": "पेज",
            "faq": "सामान्य प्रश्न",
            "contact": "संपर्क करें",
            "blog": "ब्लॉग",
            "pages_faq_title": "सामान्य प्रश्न",
            "pages_faq_desc": "सामान्य प्रश्नों के उत्तर प्राप्त करें",
            "pages_civil_title": "सिविल ठेकेदारी",
            "pages_civil_desc": "विशेषज्ञ निर्माण सेवाएं",
            "pages_residential_title": "आवासीय परिसर",
            "pages_residential_desc": "आधुनिक रहने की जगहों का अन्वेषण करें",
            "pages_renovation_title": "गृह नवीकरण",
            "pages_renovation_desc": "अपने घर को बदलने के लिए सुझाव"
        },
        "hero": {
            "subtitle": "कृष्णा एंटरप्राइजेज में आपका स्वागत है",
            "title": "अपनी निर्माण परियोजना के पुनर्निर्माण के लिए हम पर भरोसा करें",
            "description": "लोरेम इप्सम डोलर सिट अमेट कंसेक्टेटर। ब्लैंडिट अल्ट्रिसेस नल्लम उल्लामकॉर्पर आर्कु।",
            "cta_primary": "प्रोजेक्ट शुरू करें",
            "cta_secondary": "वीडियो देखें",
            "badge_number": "500+",
            "badge_label": "खुश ग्राहक"
        },
        "about": {
            "section_title": "हमारे बारे में",
            "headline": "हम ऐसी इमारतें बनाने के लिए काम करते हैं जो कार्यात्मक, सुरक्षित, आरामदायक हों",
            "description": "लोरेम वेरो कोनुबिया वेहिकुला। ब्लैंडिट अल्ट्रिसेस नल्लम उल्लामकॉर्पर आर्कु।",
            "xp_number": "15+",
            "xp_label": "वर्षों का अनुभव",
            "feature1_title": "पर्यावरण के अनुकूल",
            "feature2_title": "प्रौद्योगिकी एकीकरण",
            "cta": "हमारे बारे में"
        },
        "services": {
            "section_title": "सेवा",
            "headline": "आपकी निर्माण आवश्यकताओं <br> के लिए हमारी सेवाएं",
            "description": "लोरेम इप्सम डोलर सिट अमेट कंसेक्टेटर। ब्लैंडिट अल्ट्रिसेस नल्लम उल्लामकॉर्पर आर्कु।",
            "card1_title": "भवन डिजाइन अवधारणा",
            "card1_desc": "मोंटेस निस्ल मेकेनास लेकिन यह। कोई फोटोग्राफी बास्केटबॉल के रूप में।",
            "card2_title": "घर का निर्माण",
            "card2_desc": "मोंटेस निस्ल मेकेनास लेकिन यह। कोई फोटोग्राफी बास्केटबॉल के रूप में।",
            "card3_title": "सामान्य अनुबंध",
            "card3_desc": "मोंटेस निस्ल मेकेनास लेकिन यह। कोई फोटोग्राफी बास्केटबॉल के रूप में।"
        },
        "common": {
            "read_more": "और पढ़ें"
        },
        "contact_page": {
            "title": "संपर्क करें",
            "subtitle": "संपर्क में रहें",
            "address_label": "पता",
            "address_value": "साईबाबा मंदिर के सामने, कामोठे, नवी मुंबई",
            "phone_label": "फ़ोन",
            "email_label": "ईमेल",
            "form_title": "हमें संदेश भेजें",
            "form_name": "नाम",
            "form_email": "ईमेल",
            "form_message": "संदेश",
            "form_submit": "संदेश भेजें"
        },
        "about_page": {
            "title": "हमारे बारे में",
            "subtitle": "हम कौन हैं",
            "intro_title": "गुणवत्तापूर्ण सिविल और इंटीरियर सेवाएं प्रदान करना",
            "experience_since": "2010 से",
            "team_image_label": "कृष्णा एंटरप्राइजेज टीम",
            "intro_desc_1": "कृष्णा एंटरप्राइजेज सिविल कॉन्ट्रैक्टिंग, फैब्रिकेशन, एल्युमीनियम वर्क और इंटीरियर डिजाइन सेवाओं का अग्रणी प्रदाता है। हम अपने ग्राहकों की विविध आवश्यकताओं को पूरा करने के लिए प्रतिबद्ध हैं।",
            "intro_desc_2": "उद्योग में वर्षों के अनुभव के साथ, हम विस्तार, परियोजनाओं के समय पर पूरा होने और ग्राहक संतुष्टि पर ध्यान देने पर गर्व करते हैं।",
            "mission_title": "हमारा मिशन",
            "mission_desc": "ईमानदारी, नवाचार और उत्कृष्टता के साथ बेहतर निर्माण और डिजाइन सेवाएं प्रदान करना।",
            "vision_title": "हमारा दृष्टिकोण",
            "vision_desc": "सिविल और इंटीरियर इंफ्रास्ट्रक्चर उद्योग में सबसे भरोसेमंद नाम बनना।",
            "services_title": "हमारी मुख्य विशेषज्ञता",
            "service_civil": "सिविल कॉन्ट्रैक्टिंग",
            "service_fabrication": "फैब्रिकेशन कार्य",
            "service_aluminium": "एल्युमिनियम स्लाइडिंग विंडोज",
            "service_interior": "इंटीरियर और फर्नीचर"
        },
        "services_page": {
            "title": "हमारी सेवाएँ",
            "subtitle": "हम क्या करते हैं",
            "civil_title": "सिविल कॉन्ट्रैक्टिंग",
            "civil_desc": "संरचनात्मक कार्य, नवीनीकरण और मरम्मत सहित पूर्ण नागरिक निर्माण सेवाएँ। हम अपनी सभी परियोजनाओं में संरचनात्मक अखंडता और स्थायित्व सुनिश्चित करते हैं।",
            "fabrication_title": "फैब्रिकेशन कार्य",
            "fabrication_desc": "गेट्स, ग्रिल्स, रेलिंग और स्ट्रक्चरल स्टील की जरूरतों के लिए कस्टम मेटल फैब्रिकेशन। सटीकता और मजबूती हमारी सर्वोच्च प्राथमिकताएं हैं।",
            "aluminium_title": "एल्युमिनियम कार्य",
            "aluminium_desc": "आधुनिक एल्युमीनियम स्लाइडिंग खिड़कियां, विभाजन और दरवाजे जो घरों और कार्यालयों के लिए सौंदर्यशास्त्र, स्थायित्व और सुचारू कार्यक्षमता प्रदान करते हैं।",
            "interior_title": "इंटीरियर और फर्नीचर",
            "interior_desc": "हमारे इंटीरियर डिजाइन और कस्टम फर्नीचर समाधानों के साथ अपने स्थान को बदलें। हम आपके स्वाद के अनुरूप सुंदर, कार्यात्मक वातावरण बनाते हैं।"
        },
        "projects_page": {
            "title": "हमारे प्रोजेक्ट्स",
            "subtitle": "पोर्टफोलियो",
            "project_1_title": "आवासीय परिसर संरचना",
            "project_1_cat": "सिविल निर्माण",
            "project_2_title": "आधुनिक कार्यालय इंटीरियर",
            "project_2_cat": "इंटीरियर डिजाइन",
            "project_3_title": "औद्योगिक शेड निर्माण",
            "project_3_cat": "फैब्रिकेशन",
            "project_4_title": "कस्टम एल्यूमिनियम विंडोज",
            "project_4_cat": "एल्यूमिनियम कार्य",
            "project_5_title": "विला नवीनीकरण",
            "project_5_cat": "सिविल निर्माण",
            "project_6_title": "सुरक्षा ग्रिल और गेट",
            "project_6_cat": "फैब्रिकेशन"
        },
        "blog_page": {
            "title": "हमारा ब्लॉग",
            "subtitle": "नवीनतम समाचार और विचार",
            "read_more": "और पढ़ें",
            "blog_1_title": "घर के नवीनीकरण के लिए 5 सुझाव",
            "blog_1_date": "15 जनवरी, 2026",
            "blog_1_excerpt": "नवीनीकरण की योजना बना रहे हैं? अपने सपनों के घर का मेकओवर शुरू करने से पहले आपको इन 5 बातों पर विचार करना चाहिए।",
            "blog_2_title": "एल्युमिनियम विंडोज के फायदे",
            "blog_2_date": "10 जनवरी, 2026",
            "blog_2_excerpt": "क्यों आधुनिक घर स्थायित्व और सौंदर्यशास्त्र के लिए एल्यूमिनियम स्लाइडिंग विंडो पर स्विच कर रहे हैं।",
            "blog_3_title": "निर्माण में सुरक्षा पहले",
            "blog_3_date": "05 जनवरी, 2026",
            "blog_3_excerpt": "हम अपने श्रमिकों और ग्राहकों की सुरक्षा के लिए अपने सभी निर्माण स्थलों पर उच्चतम सुरक्षा मानक कैसे सुनिश्चित करते हैं।"
        },
        "faq_page": {
            "title": "अक्सर पूछे जाने वाले प्रश्न",
            "subtitle": "सामान्य प्रश्न",
            "q1": "आप किस प्रकार के सिविल कार्य करते हैं?",
            "a1": "हम आवासीय परिसरों, वाणिज्यिक भवनों, संरचनात्मक मरम्मत और नवीनीकरण सहित सभी प्रकार के नागरिक अनुबंध कार्य करते हैं।",
            "q2": "क्या आप कस्टम फैब्रिकेशन समाधान प्रदान करते हैं?",
            "a2": "हां, हम आपकी विशिष्ट आवश्यकताओं के अनुरूप गेट, ग्रिल, रेलिंग और स्ट्रक्चरल स्टील की जरूरतों के लिए कस्टम मेटल फैब्रिकेशन में विशेषज्ञ हैं।",
            "q3": "एल्यूमीनियम खिड़कियों पर वारंटी क्या है?",
            "a3": "हमारी एल्युमीनियम स्लाइडिंग विंडो प्रोफाइल पर मानक 5 साल की वारंटी और हार्डवेयर घटकों पर 1 साल की वारंटी के साथ आती हैं।",
            "q4": "आप अपनी सेवाओं के लिए कैसे चार्ज करते हैं?",
            "a4": "हमारा मूल्य निर्धारण पारदर्शी और परियोजना-आधारित है। हम साइट का निरीक्षण करने और आपकी आवश्यकताओं को समझने के बाद एक विस्तृत उद्धरण प्रदान करते हैं।",
            "q5": "एक परियोजना के लिए सामान्य समयरेखा क्या है?",
            "a5": "परियोजना के कर्यक्षेत्र के आधार पर समयसीमा भिन्न होती है। छोटे नवीकरण में 2-4 सप्ताह लग सकते हैं, जबकि बड़ी निर्माण परियोजनाओं में कई महीने लग सकते हैं। हम शुरू करने से पहले एक कार्यक्रम प्रदान करते हैं।"
        },
        "single_service_page": {
            "title": "सिविल ठेकेदारी",
            "subtitle": "सेवा विवरण",
            "description_1": "हमारी सिविल ठेकेदारी सेवाएं आपकी निर्माण परियोजना की रीढ़ की हड्डी के रूप में कार्य करती हैं। हम प्रारंभिक नींव से लेकर अंतिम संरचनात्मक परिष्करण तक सब कुछ संभालते हैं।",
            "description_2": "हम आवासीय और वाणिज्यिक भवन निर्माण में विशेषज्ञ हैं, बेहतर परिणाम देने के लिए आधुनिक तकनीकों और उच्च गुणवत्ता वाली सामग्रियों का लाभ उठाते हैं।",
            "features_title": "मुख्य विशेषताएं",
            "feature_1": "संरचनात्मक विश्लेषण और डिजाइन",
            "feature_2": "कंक्रीट और चिनाई का काम",
            "feature_3": "जलरोधी समाधान",
            "feature_4": "नवीकरण और पुनर्वास",
            "cta_button": "कोटेशन प्राप्त करें"
        },
        "single_project_page": {
            "title": "आवासीय परिसर",
            "subtitle": "परियोजना विवरण",
            "description_1": "इस व्यापक आवासीय परिसर परियोजना में 200 से अधिक इकाइयों वाले 5 इंटरकनेक्टेड टावरों का निर्माण शामिल था। हमारी टीम ने संरचनात्मक ढांचे से लेकर प्रीमियम फिनिशिंग तक पूरे जीवनचक्र का प्रबंधन किया।",
            "description_2": "यह परियोजना आम क्षेत्रों में स्थापित पर्यावरण के अनुकूल सामग्री, वर्षा जल संचयन प्रणाली और ऊर्जा-कुशल प्रकाश व्यवस्था के साथ टिकाऊ जीवन पर जोर देती है।",
            "info_title": "परियोजना जानकारी",
            "info_type": "प्रकार",
            "info_location": "स्थान",
            "info_scope": "स्कोप",
            "info_status": "स्थिति",
            "val_type": "सिविल निर्माण",
            "val_location": "नवी मुंबई",
            "val_scope": "5 टावर्स, 200+ इकाइयाँ",
            "val_status": "पूर्ण",
            "gallery_title": "परियोजना गैलरी",
            "cta_button": "अपना प्रोजेक्ट शुरू करें"
        },
        "single_blog_page": {
            "title": "घर के नवीनीकरण के लिए 5 सुझाव",
            "subtitle": "ब्लॉग विवरण",
            "meta_date": "15 जनवरी, 2026",
            "meta_category": "नवीनीकरण",
            "quote": "नवीनीकरण केवल रूप बदलने के बारे में नहीं है, यह आपके जीने के तरीके को सुधारने के बारे में है।",
            "content_1": "घर के नवीनीकरण की योजना बनाना रोमांचक और भारी दोनों हो सकता है। चाहे आप एक ही कमरे को अपडेट कर रहे हों या अपने पूरे घर को रीमॉडल कर रहे हों, एक सफल परियोजना के लिए उचित योजना बनाना महत्वपूर्ण है। यहाँ आपको शुरू करने के लिए 5 आवश्यक सुझाव दिए गए हैं।",
            "content_2": "सबसे पहले, एक यथार्थवादी बजट स्थापित करें। यह जानना महत्वपूर्ण है कि आप कितना खर्च करने को तैयार हैं और अप्रत्याशित खर्चों के लिए एक आकस्मिक निधि अलग रखें। दूसरा, अपनी जरूरतों बनाम अपनी इच्छाओं को प्राथमिकता दें। आवश्यक मरम्मत और सुधारों पर ध्यान दें जो आपके घर में मूल्य जोड़ते हैं।",
            "content_3": "तीसरा, सही पेशेवरों को काम पर रखें। एक कुशल ठेकेदार आपकी परियोजना की गुणवत्ता और समयसीमा में भारी अंतर ला सकता है। चौथा, ऊर्जा दक्षता पर विचार करें। ऊर्जा-कुशल खिड़कियों और उपकरणों में अपग्रेड करने से आपको लंबे समय में पैसे बचाने में मदद मिल सकती है।",
            "content_4": "अंत में, धैर्य रखें। नवीनीकरण में समय लगता है, और आपकी दिनचर्या में कुछ व्यवधान आने की संभावना है। अंतिम लक्ष्य को ध्यान में रखें और अपने घर को बदलने की प्रक्रिया का आनंद लें।",
            "tags_title": "टैग",
            "tag_1": "नवीनीकरण",
            "tag_2": "निर्माण",
            "tag_3": "इंटीरियर डिजाइन",
            "back_to_blog": "ब्लॉग पर वापस जाएँ"
        },
        "footer": {
            "copyright": "© 2026 कृष्णा एंटरप्राइजेज। सर्वाधिकार सुरक्षित।",
            "about_title": "कृष्णा एंटरप्राइजेज",
            "about_desc": "गुणवत्ता और उत्कृष्टता के लिए समर्पित अग्रणी निर्माण और आंतरिक डिजाइन फर्म।",
            "quick_links": "त्वरित लिंक",
            "services": "सेवाएं",
            "contact": "संपर्क जानकारी",
            "address": "साईबाबा मंदिर के सामने, कामोठे, नवी मुंबई",
            "phone": "+91 8898470483",
            "email": "krishnaenterprises1001@gmail.com",
            "service_civil": "सिविल ठेकेदारी",
            "service_fabrication": "फैब्रिकेशन कार्य",
            "service_interior": "इंटीरियर डिजाइन",
            "service_aluminium": "एल्युमीनियम कार्य"
        }
    },
    mr: {
        "header": {
            "brand": "कृष्णा एंटरप्राइजेस",
            "contact_phone": "कॉल: +91 8898470483 / +91 9322874711",
            "contact_email": "krishnaenterprises1001@gmail.com",
            "logo": "कृष्णा एंटरप्राइजेस",
            "cta": "सुरू करा"
        },
        "nav": {
            "home": "होम",
            "about": "आमच्याबद्दल",
            "services": "सेवा",
            "projects": "प्रकल्प",
            "pages": "पेजेस",
            "faq": "सामान्य प्रश्न",
            "contact": "संपर्क साधा",
            "blog": "ब्लॉग",
            "pages_faq_title": "सामान्य प्रश्न",
            "pages_faq_desc": "सामान्य प्रश्नांची उत्तरे मिळवा",
            "pages_civil_title": "सिव्हिल कंत्राटदारी",
            "pages_civil_desc": "तज्ञ बांधकाम सेवा",
            "pages_residential_title": "निवासी कॉम्प्लेक्स",
            "pages_residential_desc": "आधुनिक राहण्याची जागा पहा",
            "pages_renovation_title": "गृह नूतनीकरण",
            "pages_renovation_desc": "आपले घर बदलण्यासाठी टिप्स"
        },
        "hero": {
            "subtitle": "कृष्णा एंटरप्राइजेस मध्ये आपले स्वागत आहे",
            "title": "आपल्या बांधकाम प्रकल्पाच्या पुनर्बांधणीसाठी आमच्यावर विश्वास ठेवा",
            "description": "लोरेम इप्सम डोलर सिट अमेट कन्सेक्टेटर. ब्लँडिट अल्ट्रिसेस नल्लम उल्लामकॉर्पर आर्कु.",
            "cta_primary": "प्रकल्प सुरू करा",
            "cta_secondary": "व्हिडिओ पहा",
            "badge_number": "500+",
            "badge_label": "समाधानी ग्राहक"
        },
        "about": {
            "section_title": "आमच्याबद्दल",
            "headline": "आम्ही कार्यक्षम, सुरक्षित, आरामदायक अशा इमारती तयार करण्यासाठी काम करतो",
            "description": "लोरेम वेरो कोनुबिया वेहिकुला. ब्लँडिट अल्ट्रिसेस नल्लम उल्लामकॉर्पर आर्कु.",
            "xp_number": "15+",
            "xp_label": "वर्षांचा अनुभव",
            "feature1_title": "पर्यावरणपूरक",
            "feature2_title": "तंत्रज्ञान एकीकरण",
            "cta": "आमच्याबद्दल"
        },
        "services": {
            "section_title": "सेवा",
            "headline": "तुमच्या बांधकामाच्या <br> गरजांसाठी आमच्या सेवा",
            "description": "लोरेम इप्सम डोलर सिट अमेट कन्सेक्टेटर. ब्लँडिट अल्ट्रिसेस नल्लम उल्लामकॉर्पर आर्कु.",
            "card1_title": "इमारत डिझाइन संकल्पना",
            "card1_desc": "मोंटेस निस्ल मेकेनास पण हे. कोणतीही फोटोग्राफी बास्केटबॉल म्हणून.",
            "card2_title": "गृह निर्माण",
            "card2_desc": "मोंटेस निस्ल मेकेनास पण हे. कोणतीही फोटोग्राफी बास्केटबॉल म्हणून.",
            "card3_title": "सामान्य कंत्राट",
            "card3_desc": "मोंटेस निस्ल मेकेनास पण हे. कोणतीही फोटोग्राफी बास्केटबॉल म्हणून."
        },
        "common": {
            "read_more": "अधिक वाचा"
        },
        "contact_page": {
            "title": "संपर्क",
            "subtitle": "संपर्कात रहा",
            "address_label": "पत्ता",
            "address_value": "साईबाबा मंदिरासमोर, कामोठे, नवी मुंबई",
            "phone_label": "फोन",
            "email_label": "ईमेल",
            "form_title": "आम्हाला संदेश भेजवा",
            "form_name": "नाव",
            "form_email": "ईमेल",
            "form_message": "संदेश",
            "form_submit": "संदेश पाठवा"
        },
        "about_page": {
            "title": "आमच्याबद्दल",
            "subtitle": "आम्ही कोण आहोत",
            "intro_title": "दर्जेदार सिव्हिल आणि इंटिरियर सेवा प्रदान करणे",
            "experience_since": "२०१० पासून",
            "team_image_label": "कृष्णा एंटरप्राइजेस टीम",
            "intro_desc_1": "कृष्णा एंटरप्राइजेस सिव्हिल कॉन्ट्रॅक्टिंग, फॅब्रिकेशन, ॲल्युमिनियम वर्क आणि इंटिरियर डिझाइन सेवा देणारी अग्रगण्य संस्था आहे.",
            "intro_desc_2": "उद्योगातील अनेक वर्षांच्या अनुभवासह, आम्ही कामातील अचूकता, वेळेवर प्रकल्प पूर्ण करणे आणि ग्राहक समाधान यावर गर्व करतो.",
            "mission_title": "आमचे ध्येय",
            "mission_desc": "सचोटी, नावीन्य आणि उत्कृष्टतेसह दर्जेदार बांधकाम आणि डिझाइन सेवा प्रदान करणे.",
            "vision_title": "आमची दृष्टी",
            "vision_desc": "सिव्हिल आणि इंटिरियर इन्फ्रास्ट्रक्चर उद्योगातील सर्वात विश्वासार्ह नाव बनणे.",
            "services_title": "आमचे मुख्य कौशल्य",
            "service_civil": "सिव्हिल कॉन्ट्रॅक्टिंग",
            "service_fabrication": "फॅब्रिकेशन कार्य",
            "service_aluminium": "ॲल्युमिनियम स्लाइडिंग खिडक्या",
            "service_interior": "इंटिरियर आणि फर्निचर"
        },
        "services_page": {
            "title": "आमच्या सेवा",
            "subtitle": "आम्ही काय करतो",
            "civil_title": "सिव्हिल कॉन्ट्रॅक्टिंग",
            "civil_desc": "स्ट्रक्चरल काम, नूतनीकरण आणि दुरुस्तीसह संपूर्ण सिव्हिल बांधकाम सेवा. आम्ही आमच्या सर्व प्रकल्पांमध्ये संरचनात्मक अखंडता आणि टिकाऊपणाची खात्री देतो.",
            "fabrication_title": "फॅब्रिकेशन कार्य",
            "fabrication_desc": "गेट्स, ग्रिल्स, रोलिंग आणि स्ट्रक्चरल स्टीलच्या गरजांसाठी कस्टम मेटल फॅब्रिकेशन. अचूकता आणि सामर्थ्य या आमच्या सर्वोच्च प्राथमिकता आहेत.",
            "aluminium_title": "ॲल्युमिनियम कार्य",
            "aluminium_desc": "आधुनिक ॲल्युमिनियम स्लाइडिंग खिडक्या, पार्टिशन्स आणि दरवाजे जे घरे आणि कार्यालयांसाठी सौंदर्य, टिकाऊपणा आणि गुळगुळीत कार्यक्षमता प्रदान करतात.",
            "interior_title": "इंटिरियर आणि फर्निचर",
            "interior_desc": "आमच्या इंटिरियर डिझाइन आणि कस्टम फर्निचर सोल्यूशन्ससह आपली जागा बदला. आम्ही तुमच्या आवडीनुसार सुंदर, कार्यक्षम वातावरण तयार करतो."
        },
        "projects_page": {
            "title": "आमचे प्रकल्प",
            "subtitle": "पोर्टफोलियो",
            "project_1_title": "निवासी संकुल संरचना",
            "project_1_cat": "सिव्हिल बांधकाम",
            "project_2_title": "आधुनिक ऑफिस इंटिरियर",
            "project_2_cat": "इंटिरियर डिझाइन",
            "project_3_title": "औद्योगिक शेड फॅब्रिकेशन",
            "project_3_cat": "फॅब्रिकेशन",
            "project_4_title": "कस्टम ॲल्युमिनियम खिडक्या",
            "project_4_cat": "ॲल्युमिनियम कार्य",
            "project_5_title": "व्हिला नूतनीकरण",
            "project_5_cat": "सिव्हिल बांधकाम",
            "project_6_title": "सुरक्षा ग्रिल्स आणि गेट्स",
            "project_6_cat": "फॅब्रिकेशन"
        },
        "blog_page": {
            "title": "आमचा ब्लॉग",
            "subtitle": "ताज्या बातम्या आणि विचार",
            "read_more": "अधिक वाचा",
            "blog_1_title": "घर नूतनीकरणासाठी ५ टिप्स",
            "blog_1_date": "१५ जानेवारी, २०२६",
            "blog_1_excerpt": "रिनोव्हेशनचा विचार करत आहात? आपल्या स्वप्नातील घराचा मेकओव्हर सुरू करनेपूर्वी या ५ गोष्टींचा विचार करा.",
            "blog_2_title": "ॲल्युमिनियम खिडक्यांचे फायदे",
            "blog_2_date": "१० जानेवारी, २०२६",
            "blog_2_excerpt": "टिकाऊपणा आणि सौंदर्यासाठी आधुनिक घरे ॲल्युमिनियम स्लाइडिंग खिडक्यांकडे का वळत आहेत.",
            "blog_3_title": "बांधकामात सुरक्षा प्रथम",
            "blog_3_date": "०५ जानेवारी, २०२६",
            "blog_3_excerpt": "कामगार आणि ग्राहकांच्या सुरक्षेसाठी आम्ही आमच्या सर्व बांधकाम साइटवर सर्वोच्च सुरक्षा मानके कशी सुनिश्चित करतो."
        },
        "faq_page": {
            "title": "सतत विचारले जाणारे प्रश्न",
            "subtitle": "सामान्य प्रश्न",
            "q1": "तुम्ही कोणत्या प्रकारचे सिव्हिल काम करता?",
            "a1": "आम्ही निवासी संकुले, व्यावसायिक इमारती, स्ट्रक्चरल दुरुस्ती आणि नूतनीकरणासह सर्व प्रकारची सिव्हिल कंत्राटी कामे करतो.",
            "q2": "तुम्ही कस्टम फॅब्रिकेशन सोल्यूशन्स देता का?",
            "a2": "होय, आम्ही तुमच्या विशिष्ट गरजांनुसार गेट्स, ग्रिल्स, रेलिंग आणि स्ट्रक्चरल स्टीलच्या गरजांसाठी कस्टम मेटल फॅब्रिकेशनमध्ये माहिर आहोत.",
            "q3": "ॲल्युमिनियम खिडक्यांवर वॉरंटी काय आहे?",
            "a3": "आमच्या ॲल्युमिनियम स्लाइडिंग खिडक्या प्रोफाइलवर प्रमाणित ५ वर्षांच्या वॉरंटीसह आणि हार्डवेअर घटकांवर १ वर्षाच्या वॉरंटीसह येतात.",
            "q4": "तुम्ही तुमच्या सेवांसाठी पैसे कसे आकारता?",
            "a4": "आमची किंमत पारदर्शक आणि प्रोजेक्ट-आधारित आहे. जागेची पाहणी केल्यानंतर आणि तुमच्या गरजा समजून घेतल्यानंतर आम्ही सविस्तर कोटेशन देतो.",
            "q5": "एखाद्या प्रकल्पासाठी सामान्य वेळमर्यादा काय आहे?",
            "a5": "वेळमर्यादा कामाच्या व्याप्तीवर अवलंबून असते. लहान नूतनीकरणास २-४ आठवडे लागू शकतात, तर मोठ्या बांधकाम प्रकल्पांना काही महिने लागू शकतात. सुरू करण्यापूर्वी आम्ही वेळापत्रक देतो."
        },
        "single_service_page": {
            "title": "सिव्हिल कॉन्ट्रॅक्टिंग",
            "subtitle": "सेवा तपशील",
            "description_1": "आमच्या सिव्हिल कॉन्ट्रॅक्टिंग सेवा आपल्या बांधकाम प्रकल्पाचा कणा म्हणून कार्य करतात. आम्ही सुरुवातीच्या पाया पासुन ते अंतिम स्ट्रक्चरल फिनिशिंगपर्यंत सर्व काही हाताळतो.",
            "description_2": "आम्ही निवासी आणि व्यावसायिक इमारत बांधकामात माहिर आहोत, उत्कृष्ट परिणाम देण्यासाठी आधुनिक तंत्रे आणि उच्च-गुणवत्तेच्या साहित्याचा वापर करतो.",
            "features_title": "मुख्य वैशिष्ट्ये",
            "feature_1": "स्ट्रक्चरल विश्लेषण आणि डिझाइन",
            "feature_2": "काँक्रीट आणि गवंडी काम",
            "feature_3": "वॉटरप्रूफिंग सोल्यूशन्स",
            "feature_4": "नूतनीकरण आणि पुनर्वसन",
            "cta_button": "कोटेशन मिळवा"
        },
        "single_project_page": {
            "title": "निवासी संकुल",
            "subtitle": "प्रकल्प तपशील",
            "description_1": "या सर्वसमावेशक निवासी संकुल प्रकल्पात 200 हून अधिक युनिट्ससह 5 इंटरकनेक्टेड टॉवर्सचे बांधकाम समाविष्ट होते. आमच्या टीमने स्ट्रक्चरल सांगाड्यापासून प्रीमियम फिनिशिंगपर्यंत संपूर्ण जीवनचक्र व्यवस्थापित केले.",
            "description_2": "या प्रकल्पात इको-फ्रेंडली साहित्य, रेन वॉटर हार्वेस्टिंग सिस्टम आणि सामान्य भागात ऊर्जा-कार्यक्षम प्रकाश व्यवस्था यासह शाश्वत जीवनावर भर देण्यात आला आहे.",
            "info_title": "प्रकल्प माहिती",
            "info_type": "प्रकार",
            "info_location": "स्थान",
            "info_scope": "व्याप्ती",
            "info_status": "स्थिती",
            "val_type": "सिव्हिल कन्स्ट्रक्शन",
            "val_location": "नवी मुंबई",
            "val_scope": "5 टॉवर्स, 200+ युनिट्स",
            "val_status": "पूर्ण झाले",
            "gallery_title": "प्रकल्प गॅलरी",
            "cta_button": "आपला प्रकल्प सुरू करा"
        },
        "single_blog_page": {
            "title": "घर नूतनीकरणासाठी 5 टिप्स",
            "subtitle": "ब्लॉग तपशील",
            "meta_date": "15 जानेवारी, 2026",
            "meta_category": "नूतनीकरण",
            "quote": "नूतनीकरण म्हणजे केवळ स्वरूप बदलणे नव्हे, तर तुमची राहणीमान सुधारणे होय.",
            "content_1": "घराच्या नूतनीकरणाचे नियोजन करणे रोमांचक आणि कठीण दोन्ही असू शकते. तुम्ही एका खोलीचे अद्ययावत करत असाल किंवा तुमच्या संपूर्ण घराचे रीमॉडेलिंग करत असाल, एक यशस्वी प्रकल्पासाठी योग्य नियोजन करणे महत्त्वाचे आहे. तुम्हाला सुरुवात करण्यासाठी येथे 5 आवश्यक टिप्स आहेत.",
            "content_2": "प्रथम, एक वास्तववादी बजेट स्थापित करा. तुम्ही किती खर्च करण्यास तयार आहात हे जाणून घेणे महत्त्वाचे आहे आणि अनपेक्षित खर्चासाठी आकस्मिक निधी बाजूला ठेवा. दुसरे, तुमच्या गरजा विरुद्ध तुमच्या इच्छांना प्राधान्य द्या. तुमच्या घराचे मूल्य वाढवणाऱ्या आवश्यक दुरुस्ती आणि सुधारणांवर लक्ष केंद्रित करा.",
            "content_3": "तिसरे, योग्य व्यावसायिकांना कामावर घ्या. एक कुशल कंत्राटदार तुमच्या प्रकल्पाच्या गुणवत्तेत आणि वेळेत मोठा फरक करू शकतो. चौथे, ऊर्जा कार्यक्षमतेचा विचार करा. ऊर्जा-कार्यक्षम खिडक्या आणि उपकरणांमध्ये अपग्रेड केल्याने तुम्हाला दीर्घकाळात पैसे वाचवण्यास मदत होऊ शकते.",
            "content_4": "शेवटी, धैर्य बाळगा. नूतनीकरणास वेळ लागतो आणि तुमच्या दैनंदिन कामात काही व्यत्यय येण्याची शक्यता आहे. अंतिम ध्येय लक्षात ठेवा आणि तुमचे घर बदलण्याच्या प्रक्रियेचा आनंद घ्या.",
            "tags_title": "कॅटेगिरी",
            "tag_1": "नूतनीकरण",
            "tag_2": "बांधकाम",
            "tag_3": "इंटिरियर डिझाइन",
            "back_to_blog": "ब्लॉगवर परत जा"
        },
        "footer": {
            "copyright": "© 2026 कृष्णा एंटरप्राइजेस. सर्व हक्क राखीव.",
            "about_title": "कृष्णा एंटरप्राइजेस",
            "about_desc": "गुणवत्ता आणि उत्कृष्टतेसाठी समर्पित आघाडीची बांधकाम आणि अंतर्गत डिझाइन फर्म.",
            "quick_links": "क्विक लिंक्स",
            "services": "सेवा",
            "contact": "संपर्क माहिती",
            "address": "साईबाबा मंदिरासमोर, कामोठे, नवी मुंबई",
            "phone": "+91 8898470483",
            "email": "krishnaenterprises1001@gmail.com",
            "service_civil": "सिव्हिल कंत्राटदारी",
            "service_fabrication": "फॅब्रिकेशन काम",
            "service_interior": "इंटिरियर डिझाइन",
            "service_aluminium": "अॅल्युमिनियम काम"
        }
    }
};

/**
 * Loads the JSON file for the requested language and updates the DOM.
 * @param {string} lang - 'en', 'hi', or 'mr'
 */
async function setLanguage(lang) {
    try {
        console.log(`Loading language: ${lang}`);
        let translations;

        try {
            // Attempt to fetch the JSON file
            // Note: In a real server environment, ensure MIME types are correct. 
            // For local files, this might require a local server (vs opening file://) due to CORS.
            const response = await fetch(`lang/${lang}.json`);

            if (!response.ok) {
                throw new Error(`Could not load language file: ${lang}`);
            }

            translations = await response.json();
        } catch (fetchError) {
            console.warn(`Fetch failed (likely file:// protocol), using fallback for: ${lang}`);
            if (translationsFallback[lang]) {
                translations = translationsFallback[lang];
            } else {
                throw new Error(`No fallback translation found for: ${lang}`);
            }
        }

        // Update DOM elements
        updateContent(translations);

        // Save preference
        localStorage.setItem('site_lang', lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;

    } catch (error) {
        console.error('Error loading language:', error);
    }
}

/**
 * Traverses the DOM for elements with 'data-i18n' attribute
 * and replaces their content with the value from the translations object.
 * @param {object} translations - Nested object of strings
 */
function updateContent(translations) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getNestedValue(translations, key);

        if (value) {
            // If the element has specific HTML content (like line breaks), use innerHTML
            // otherwise textContent is safer. For this project, we might have <br>.
            if (value.includes('<') && value.includes('>')) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        } else {
            console.warn(`Missing translation for key: ${key}`);
        }
    });
}

/**
 * Helper to get value from nested object using dot notation string
 * e.g., 'header.brand' -> translations['header']['brand']
 */
function getNestedValue(obj, keyString) {
    return keyString.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : null;
    }, obj);
}
