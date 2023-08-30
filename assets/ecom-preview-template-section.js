{% comment %}
  EComposer (https://ecomposer.io)
  You SHOULD NOT modify source code in this page because
  It is automatically generated from EComposer
  At 2023-08-30 15:26:32
{% endcomment %}

{% assign ecom_root_url = routes.root_url %}
{% if ecom_root_url != '/' %}
  {% assign ecom_root_url = routes.root_url | append: '/' %}
{% endif %}
<link
  rel='stylesheet'
  media='print'
  onload="this.media='all'"
  id='ecom-vendors-slider_css'
  href='https://cdn.ecomposer.app/vendors/css/ecom-swiper-bundle-v9.min.css'

><link
  rel='stylesheet'
  media='all'
  id='ecom-vendors-css_ecomposer_base'
  href='https://cdn.ecomposer.app/vendors/css/ecom-base.css?v=1.5'

><noscript
  ><link
    rel='stylesheet'
    media='all'
    onload="this.media='all'"
    id='ecom-vendors-slider_css'
    href='https://cdn.ecomposer.app/vendors/css/ecom-swiper-bundle-v9.min.css'
  ><link
    rel='stylesheet'
    media='all'
    id='ecom-vendors-css_ecomposer_base'
    href='https://cdn.ecomposer.app/vendors/css/ecom-base.css?v=1.5'
></noscript>
<script
  type='text/javascript'
  asyc='async'
  id='ecom-vendors-slider_js'
  src='https://cdn.ecomposer.app/vendors/js/ecom-swiper-bundle-v9.min.js'
></script>
{%- assign headless = true -%}
{%- render 'ecom_theme_helper' -%}
{% capture section_id %}ecom-preview-section-section{% endcapture -%}
{%- if section and section_id == section.id and headless == true %}
  {{ content_for_header }}
  {% render 'ecom_header', ECOM_THEME: true -%}
{%- endif -%}
<link
  href='https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap'
  rel='stylesheet'
>
{{ 'ecom-preview-template-section.css' | asset_url | stylesheet_tag }}
<script src='{{'ecom-preview-template-section.js' | asset_url }}' defer='defer'></script>
<script type='text/javascript' class='ecom-page-info'>
  window.EComposer = window.EComposer || {};
  window.EComposer.TEMPLATE_ID = 'preview-template-section';
  window.EComposer.SECTION = {
    template_id: 'preview-template-section',
    title: 'customslider',
    type: 'section',
    slug: 'ecom-preview-section',
    plan_id: 1,
  };
</script>
<div class='ecom-builder' id='ecom-preview-section'>
  <div class='ecom-sections' data-section-id='{{section.id}}'>
    <section
      class='ecom-row ecom-core ecom-section ecom-7hvmgvj5dyo'
      data-id='ecom-7hvmgvj5dyo'
      style='z-index: inherit;'
    >
      <div data-deep='1' class='core__row--columns'>
        <div
          class='ecom-column ecom-core core__column--first core__column--last ecom-wj0nxmakwm'
          style='border: 1px dashed rgba(var(--text-color), .0);'
        >
          <div class='core__column--wrapper'>
            <div class='core__blocks' index='0'>
              <div class='core__blocks--body'>
                <div class='ecom-block ecom-core core__block elmspace ecom-kcynexx1fg' data-core-is='group'>
                  <div class='ecom-elements ecom-base-element ecom-elements-slider'>
                    <div class='ecom-core ecom-group core__block ecom-foua4ggkox'>
                      <div class='core__group--wrapper' data-r='' style=''>
                        <div class='ecom-slider--container'>
                          <div
                            class='ecom-element ecom-slider slider__body ecom-swiper-container ecom-slider-not-custom-height'
                            data-option-swiper='{&quot;direction&quot;:&quot;horizontal&quot;,&quot;loop&quot;:false,&quot;breakpoints&quot;:{&quot;slidesPerView&quot;:1.5,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:12},&quot;autoplay&quot;:{&quot;enabled&quot;:true,&quot;delay&quot;:2200,&quot;pauseOnMouseEnter&quot;:true,&quot;disableOnInteraction&quot;:false,&quot;reverseDirection&quot;:false},&quot;speed&quot;:5000,&quot;effect&quot;:&quot;slide&quot;,&quot;grabCursor&quot;:true,&quot;slideActiveClass&quot;:&quot;ecom-box-active&quot;,&quot;centeredSlides&quot;:true,&quot;watchOverflow&quot;:true,&quot;autoHeight&quot;:true,&quot;cubeEffect&quot;:{&quot;slideShadows&quot;:true,&quot;shadowOffset&quot;:20},&quot;creativeEffect&quot;:{},&quot;fadeEffect&quot;:{&quot;crossFade&quot;:true},&quot;pagination&quot;:{&quot;el&quot;:&quot;.ecom-swiper-pagination&quot;,&quot;type&quot;:&quot;bullets&quot;,&quot;clickable&quot;:true},&quot;navigation&quot;:{&quot;nextEl&quot;:&quot;.ecom-swiper-button-next&quot;,&quot;prevEl&quot;:&quot;.ecom-swiper-button-prev&quot;},&quot;slidesPerView&quot;:1.5,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:12}'
                          >
                            <div class='ecom-swiper-wrapper'>
                              <div class='ecom-swiper-slide'>
                                <div class='ecom-content-item'>
                                  <div class='ecom-slider__image--wrapper' data-id='ecom-b3gn1z3jdq8'>
                                    <picture class='ecom-image-background'
                                      ><img
                                        src='https://placeholder.ecomposer.app/faker.png?width=1920&height=640'
                                        name='Rectangle_1677'
                                        ext='jpg'
                                        thumbnail='https://placeholder.ecomposer.app/faker.png?width=1920&height=640'
                                        alt='Rectangle_1677'
                                        style='--ecom-object-fit:cover;'
                                    ></picture>
                                  </div>
                                  <div class='ecom-content-item__container ecom-transition-undefined'>
                                    <div class='core__blocks' index='0'>
                                      <div class='core__blocks--body'>
                                        <div
                                          class='ecom-block ecom-core core__block elmspace ecom-hp6a3ki9od'
                                          data-core-is='row'
                                        >
                                          <div
                                            class='ecom-row ecom-core core__block ecom-y9whu4ta0ah'
                                            data-id='ecom-y9whu4ta0ah'
                                            style='z-index: inherit;'
                                          >
                                            <div data-deep='2' class='core__row--columns'>
                                              <div
                                                class='ecom-column ecom-core core__column--first core__column--last ecom-tpuijwypv7'
                                                style='border: 1px dashed rgba(var(--text-color), .0);'
                                              >
                                                <div class='core__column--wrapper'>
                                                  <div class='core__blocks' index='0'>
                                                    <div class='core__blocks--body'>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-aopbplsfom8'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element element__heading ecom-element ecom-html'
                                                          data-stopdrag='true'
                                                          deep='2'
                                                        >
                                                          <h2 class='ecom__heading ecom-db'>
                                                            {{
                                                              'sections.ecom-preview-section-section.headingtext_aopbplsfom8_html'
                                                              | t
                                                            }}
                                                          </h2>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-euk5rpx2lnv'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element ecom-element element__text'
                                                          data-stopdrag=''
                                                          deep='2'
                                                        >
                                                          <div class='text-content ecom-html has-drop-cap-view-default'>
                                                            {{
                                                              'sections.ecom-preview-section-section.textcontent_euk5rpx2lnv_html'
                                                              | t
                                                            }}
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-kvjmhwaudj'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element ecom-element element__text'
                                                          data-stopdrag=''
                                                          deep='2'
                                                        >
                                                          <div class='text-content ecom-html has-drop-cap-view-default'>
                                                            {{
                                                              'sections.ecom-preview-section-section.textcontent_kvjmhwaudj_html'
                                                              | t
                                                            }}
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-tck78o504pq'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element ecom-element-button ecom-button-default'
                                                          deep='2'
                                                        >
                                                          <a
                                                            class='ecom__element--button ecom-flex ecom-fl_center ecom-al_center'
                                                            href='#'
                                                            ><span class='ecom__element--button-icon-text'>
                                                              {{-
                                                                'sections.ecom-preview-section-section.buttoncontent_tck78o504pq_html'
                                                                | t
                                                              -}}</span
                                                            ><span class='ecom-button-icon ecom__element--button-icon'>
                                                              <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                viewBox='0 0 512 512'
                                                                fill='currentColor'
                                                              >
                                                                <path d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"></path>
                                                              </svg></span
                                                          ></a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class='ecom-column__overlay'><div class='ecom-overlay'></div></div>
                                              </div>
                                            </div>
                                            <div class='ecom-section__overlay'><div class='ecom-overlay'></div></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class='ecom-swiper-slide'>
                                <div class='ecom-content-item'>
                                  <div class='ecom-slider__image--wrapper' data-id='ecom-xm0aqphmxp9'>
                                    <picture class='ecom-image-background'
                                      ><img
                                        src='https://placeholder.ecomposer.app/faker.png?width=1920&height=640'
                                        name='Rectangle_1709'
                                        ext='jpg'
                                        thumbnail='https://placeholder.ecomposer.app/faker.png?width=1920&height=640'
                                        id='JJVmpysY'
                                        alt='Rectangle_1709'
                                        style=''
                                    ></picture>
                                  </div>
                                  <div class='ecom-content-item__container ecom-transition-undefined'>
                                    <div class='core__blocks' index='1'>
                                      <div class='core__blocks--body'>
                                        <div
                                          class='ecom-block ecom-core core__block elmspace ecom-tgyprasnqro'
                                          data-core-is='row'
                                        >
                                          <div
                                            class='ecom-row ecom-core core__block ecom-92ndxzg0mt'
                                            data-id='ecom-92ndxzg0mt'
                                            style='z-index: inherit;'
                                          >
                                            <div data-deep='2' class='core__row--columns'>
                                              <div
                                                class='ecom-column ecom-core core__column--first core__column--last ecom-zbyngjdmh7r'
                                                style='border: 1px dashed rgba(var(--text-color), .0);'
                                              >
                                                <div class='core__column--wrapper'>
                                                  <div class='core__blocks' index='0'>
                                                    <div class='core__blocks--body'>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-hsewz73c5zc'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element element__heading ecom-element ecom-html'
                                                          data-stopdrag='true'
                                                          deep='2'
                                                        >
                                                          <h2 class='ecom__heading ecom-db'>
                                                            {{
                                                              'sections.ecom-preview-section-section.headingtext_hsewz73c5zc_html'
                                                              | t
                                                            }}
                                                          </h2>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-51gyshs8jfd'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element ecom-element element__text'
                                                          data-stopdrag=''
                                                          deep='2'
                                                        >
                                                          <div class='text-content ecom-html has-drop-cap-view-default'>
                                                            {{
                                                              'sections.ecom-preview-section-section.textcontent_51gyshs8jfd_html'
                                                              | t
                                                            }}
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-xm0dg1u9uvb'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element ecom-element element__text'
                                                          data-stopdrag=''
                                                          deep='2'
                                                        >
                                                          <div class='text-content ecom-html has-drop-cap-view-default'>
                                                            {{
                                                              'sections.ecom-preview-section-section.textcontent_xm0dg1u9uvb_html'
                                                              | t
                                                            }}
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-qoqemb9wy8'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element ecom-element-button ecom-button-default'
                                                          deep='2'
                                                        >
                                                          <a
                                                            class='ecom__element--button ecom-flex ecom-fl_center ecom-al_center'
                                                            href='#'
                                                            ><span class='ecom__element--button-icon-text'>
                                                              {{-
                                                                'sections.ecom-preview-section-section.buttoncontent_qoqemb9wy8_html'
                                                                | t
                                                              -}}</span
                                                            ><span class='ecom-button-icon ecom__element--button-icon'>
                                                              <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                viewBox='0 0 512 512'
                                                                fill='currentColor'
                                                              >
                                                                <path d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"></path>
                                                              </svg></span
                                                          ></a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class='ecom-column__overlay'><div class='ecom-overlay'></div></div>
                                              </div>
                                            </div>
                                            <div class='ecom-section__overlay'><div class='ecom-overlay'></div></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class='ecom-swiper-slide'>
                                <div class='ecom-content-item'>
                                  <div class='ecom-slider__image--wrapper' data-id='ecom-26diasfz66q'>
                                    <picture class='ecom-image-background'
                                      ><img
                                        src='https://placeholder.ecomposer.app/faker.png?width=1920&height=640'
                                        name='Rectangle_1710'
                                        ext='jpg'
                                        thumbnail='https://placeholder.ecomposer.app/faker.png?width=1920&height=640'
                                        id='TOkofbrb'
                                        alt='Rectangle_1710'
                                        style=''
                                    ></picture>
                                  </div>
                                  <div class='ecom-content-item__container ecom-transition-undefined'>
                                    <div class='core__blocks' index='2'>
                                      <div class='core__blocks--body'>
                                        <div
                                          class='ecom-block ecom-core core__block elmspace ecom-ehao18n8wlw'
                                          data-core-is='row'
                                        >
                                          <div
                                            class='ecom-row ecom-core core__block ecom-4tn6gplaamv'
                                            data-id='ecom-4tn6gplaamv'
                                            style='z-index: inherit;'
                                          >
                                            <div data-deep='2' class='core__row--columns'>
                                              <div
                                                class='ecom-column ecom-core core__column--first core__column--last ecom-2w82b50a2j4'
                                                style='border: 1px dashed rgba(var(--text-color), .0);'
                                              >
                                                <div class='core__column--wrapper'>
                                                  <div class='core__blocks' index='0'>
                                                    <div class='core__blocks--body'>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-lht5vt3fdoc'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element element__heading ecom-element ecom-html'
                                                          data-stopdrag='true'
                                                          deep='2'
                                                        >
                                                          <h2 class='ecom__heading ecom-db'>
                                                            {{
                                                              'sections.ecom-preview-section-section.headingtext_lht5vt3fdoc_html'
                                                              | t
                                                            }}
                                                          </h2>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-5suf7c0g27m'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element ecom-element element__text'
                                                          data-stopdrag=''
                                                          deep='2'
                                                        >
                                                          <div class='text-content ecom-html has-drop-cap-view-default'>
                                                            {{
                                                              'sections.ecom-preview-section-section.textcontent_5suf7c0g27m_html'
                                                              | t
                                                            }}
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-2j8ypizad0v'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element ecom-element element__text'
                                                          data-stopdrag=''
                                                          deep='2'
                                                        >
                                                          <div class='text-content ecom-html has-drop-cap-view-default'>
                                                            {{
                                                              'sections.ecom-preview-section-section.textcontent_2j8ypizad0v_html'
                                                              | t
                                                            }}
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class='ecom-block ecom-core core__block elmspace ecom-wwaagvm5wi'
                                                        data-core-is='block'
                                                      >
                                                        <div
                                                          class='ecom__element ecom-element-button ecom-button-default'
                                                          deep='2'
                                                        >
                                                          <a
                                                            class='ecom__element--button ecom-flex ecom-fl_center ecom-al_center'
                                                            href='#'
                                                            ><span class='ecom__element--button-icon-text'>
                                                              {{-
                                                                'sections.ecom-preview-section-section.buttoncontent_wwaagvm5wi_html'
                                                                | t
                                                              -}}</span
                                                            ><span class='ecom-button-icon ecom__element--button-icon'>
                                                              <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                viewBox='0 0 512 512'
                                                                fill='currentColor'
                                                              >
                                                                <path d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"></path>
                                                              </svg></span
                                                          ></a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class='ecom-column__overlay'><div class='ecom-overlay'></div></div>
                                              </div>
                                            </div>
                                            <div class='ecom-section__overlay'><div class='ecom-overlay'></div></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class='ecom-swiper-navigation-position' style='display: none;'>
                            <button
                              class='ecom-swiper-button ecom-swiper-button-prev'
                              style='--ecom-position: unset; --ecom-position__tablet: unset; --ecom-position__mobile: unset;'
                            >
                              <svg
                                xmlns='http: //www.w3.org/2000/svg'
                                width='52'
                                height='52'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                class='feather feather-chevron-left'
                              >
                                <polyline points="15 18 9 12 15 6"></polyline>
                              </svg></button
                            ><button
                              class='ecom-swiper-button ecom-swiper-button-next'
                              style='--ecom-position: unset; --ecom-position__tablet: unset; --ecom-position__mobile: unset;'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='52'
                                height='52'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                class='feather feather-chevron-right'
                              >
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </button>
                          </div>
                          <div
                            class='ecom-swiper-pagination-position ecom-swiper-pagination'
                            style='display: none;'
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='ecom-column__overlay'><div class='ecom-overlay'></div></div>
        </div>
      </div>
      <div class='ecom-section__overlay'><div class='ecom-overlay'></div></div>
    </section>
  </div>
</div>
{% schema %}
{
  "name": "customslider",
  "locales": {
    "en": {
      "headingtext_aopbplsfom8_html": "Sub heading",
      "textcontent_euk5rpx2lnv_html": "Slider Style 1",
      "textcontent_kvjmhwaudj_html": "Sed augue lacinia lectus nunc dolor vulputate cursus risus. Quam interdum elementum risus facilisi enim tortor. Egestas et pulvinar blandit commodo egestas ut sodales tempor.&nbsp;",
      "buttoncontent_tck78o504pq_html": "Button Gradient 2",
      "headingtext_hsewz73c5zc_html": "Sub heading",
      "textcontent_51gyshs8jfd_html": "Slider Style 1",
      "textcontent_xm0dg1u9uvb_html": "Sed augue lacinia lectus nunc dolor vulputate cursus risus. Quam interdum elementum risus facilisi enim tortor. Egestas et pulvinar blandit commodo egestas ut sodales tempor.&nbsp;",
      "buttoncontent_qoqemb9wy8_html": "Button Gradient 2",
      "headingtext_lht5vt3fdoc_html": "Sub heading",
      "textcontent_5suf7c0g27m_html": "Slider Style 1",
      "textcontent_2j8ypizad0v_html": "Sed augue lacinia lectus nunc dolor vulputate cursus risus. Quam interdum elementum risus facilisi enim tortor. Egestas et pulvinar blandit commodo egestas ut sodales tempor.&nbsp;",
      "buttoncontent_wwaagvm5wi_html": "Button Gradient 2"
    }
  },
  "settings": [
    {
      "type": "header",
      "content": "The section was generated by [Ecomposer](https:\/\/ecomposer.io).",
      "info": "\n EComposer is a Visual Page Builder app on Shopify AppStore.\n It provides 100+ pre-built templates in library,\n so you can build unlimited pages that you can imagine with it.\n "
    },
    {
      "type": "header",
      "content": "[EDIT WITH EComposer APP \u2192](https:\/\/ecomposer.app\/shop\/builder?page=section&id=preview-template-section&utm_source=theme-customize)",
      "info": "(*You must install the app to start editing this section [Learn more](https:\/\/help.ecomposer.io\/docs\/getting-started\/installation\/))"
    }
  ]
}
{% endschema %}
