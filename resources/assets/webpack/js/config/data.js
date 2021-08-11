window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

const Data = {
  name: 'Veiga Ventos ingeniería',
  email: 'info@veigaventos.com',
  phone: '(+598) 27169244  ',
  cellphone: '+598 98188129  ',
  cellphone2: '+598 99108520',
  whatsapp_link: 'https://api.whatsapp.com/send?phone=59898188129&text=Hola!',
  whatsapp_link2: 'https://api.whatsapp.com/send?phone=59899108520&text=Hola!',
  instagram_link:
    'https://www.instagram.com/veigaventosingenieria/?utm_medium=copy_link',
  facebook_link: '',
  linkedin_link:
    'https://www.linkedin.com/company/v-v-ingenieria/?viewAsMember=true',
  address: 'Canadá 6263',
  business_hours: 'lunes a viernes de 9 a 18 hs',
  path_url: '',
  analitic_propiedad: 'G-502W399V58',
  set_analitic: function (titulo, path) {
    gtag('js', new Date());
    gtag('config', this.analitic_propiedad, {
      page_title: titulo,
      page_path: path,
    });
  },
};

export default Data;
