export const langFlags = {
    nl: '🇳🇱', en: '🇬🇧', fr: '🇫🇷', de: '🇩🇪', es: '🇪🇸', pt: '🇵🇹', ar: '🇸🇦', pl: '🇵🇱', ja: '🇯🇵'
};
export const allLanguages = Object.keys(langFlags);
export const createEmptyFormData = () => {
    const data = {};
    allLanguages.forEach(lang => {
        data[`title_${lang}`] = '';
        data[`excerpt_${lang}`] = '';
        data[`content_${lang}`] = '';
    });
    data.category = '';
    data.featured = false;
    data.published = false;
    data.image_url = '';
    data.instagram_url = '';
    data.tiktok_url = '';
    return data;
};
export const isLanguageMissing = (lang, formData) => {
    return !formData[`title_${lang}`] && !formData[`excerpt_${lang}`] && !formData[`content_${lang}`];
};
export const getMissingLanguages = (formData) => {
    return allLanguages.filter(lang => isLanguageMissing(lang, formData));
};
export const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
};
