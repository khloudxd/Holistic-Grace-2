'use strict';

try {
  angular.module('siteGeneratorStaticsConsumerTranslations');
} catch (e) {
  angular.module('siteGeneratorStaticsConsumerTranslations', ['pascalprecht.translate']);
}

angular.module('siteGeneratorStaticsConsumerTranslations').config(['$translateProvider',
  function ($translateProvider) {
    var translations = {
      'general': {
        'YO': 'Hello',
        'delete': 'Delete',
        'edit': 'Edit',
        'layout': 'Layouts',
        'designs': 'Designs',
        'move': 'Move',
        'add': 'Add',
        'cancel': 'Cancel',
        'apply': 'Apply',
        'undo': 'Undo',
        'help': 'Help',
        'redo': 'Redo',
        'page': 'Page',
        'imported-page': 'Imported Page',
        'blank': 'Blank Page',
        'new-page': 'New Page',
        'size': 'Size',
        'next': 'Next',
        'done': 'Done',
        'got-it': 'Got It',
        'dont-show-again': 'Don\'t show this next time',
        'leave-note': 'Any unsaved changes will be lost.',
        'still-loading': 'We\'ll be ready soon.',
        'Stores': 'Store',
        'Bookings': 'Bookings',
        'ProGallery': 'Media',
        'Music': 'Music',
        'Blog': 'Blog',
        'no-link': 'Not Connected',
        'logo': 'Logo',
        'social': 'Social',
        'email': {
          'invalid': 'This is not a valid email address'
        },
        'continue': 'Continue',
        'no-thanks': 'No, Thanks',
        'customize': 'Customize',
        'replace': 'Replace',
        'galleries': 'Galleries',
        'map': 'Map',
        'sign-up': 'Sign Up',
        'top': 'Top'
      },
      'dropdown': {
        'site-pages': 'SITE PAGES',
        'manage-pages': 'Manage Pages'
      },
      'tpa': {
        'settings': 'Settings',
        'subscribe': {
          'subscribe': 'Subscribe',
          'stay-up-to-date': 'Stay up to date',
          'submit': 'Submit',
          'lets-email-you': 'Let\'s E-mail you',
          'so-youll-never-miss-an-update': 'So you\'ll never miss an update'
        },
        'stores': {
          'product_gallery': 'Shop',
          'product_page': 'Product Page',
          'shopping_cart': 'Cart',
          'thank_you_page': 'Thank You Page',
          'checkout': 'Checkout'
        },
        'forum': {
          'forum': 'Forum'
        },
        'blog': {
          'blog': 'Blog',
          'blog_single_post_widget': 'Single Post'
        },
        'blog2': {
          'blog': 'Blog'
        },
        'bookings': {
          'scheduler': 'Book Online'
        },
        'events': {
          'events': 'Event Info',
          'callToAction': 'RSVP'
        },
        'members': {
          'hello_member': 'Hello',
          'welcome': 'Welcome'
        }
      },
      'error': {
        'session-expired': {
          'text': 'You have been signed out of your account. Sign In again.',
          'ok-button': 'Sign In'
        },
        'conflicting-changes': {
          'text': 'You’re working in more than one window or tab.<br/>Reload to view your site with the most recent changes.',
          'ok-button': 'Reload'
        },
        'save-failure': {
          'text': 'There was an error saving your site.<br/>Click Reload to continue working.',
          'ok-button': 'Reload'
        },
        'save-as-template': {
          'text': 'There was an error saving your site as template.<br/>Click Reload to continue working.',
          'ok-button': 'OK'
        },
        'publish-disabled-on-server': {
          'text': 'Due to server maintenance, publish is temporarily disabled. Please leave your editor open and try again in 15 minutes.',
          'ok-button': 'OK'
        },
        'site-not-managed-by-ob': {
          'heading': 'What Are You Doing Here? :)',
          'text': 'To keep editing your stunning website, go to the Wix Editor.',
          'ok-button': 'Go to Wix Editor'
        },
        'story-archived': {
          'text': 'The site you’re looking for has been deleted or no longer exists.<br/><br/>But maybe we can still help you find<br/>what you\'re looking for:<br/><br/><a href="http://wix.com">Go to Wix.com</a><br/><a href="https://www.wix.com/new/vertical?ref=adi">Create a new site</a><br/><a href="https://www.wix.com/support/html5/">Get in touch with our Support Team</a>'
        }
      },
      'intro': {
        'skip-button': 'Skip',
        'next-button': 'Next',
        'back-button': 'Back',
        'optional-label': 'OPTIONAL',
        'change-link': 'Change',
        'loading-message': 'Conducting interstellar search...',
        'first-time': {
          'title2': 'Let\'s design a website that\'s uniquely yours.',
          'title1': 'Enter the world of ADI.'
        },
        'category-search': {
          'label': 'What is your website for?',
          'input-placeholder': 'Enter your business or website type',
          'sublabel': 'Choose the business or website type to get started.',
          'label-business': 'What kind of business do you want to create a website for?',
          'label-health-wellness': 'What do you want to create a website for?',
          'label-Stores': 'What kind of online store do you want to create?',
          'label-other': 'What do you want to create a website for?',
          'label-photography': 'What kind of photography website do you want to create?',
          'label-portfolio-cv': 'What kind of resume or portfolio do you want to create?',
          'label-Blog': 'What kind of blog do you want to create?',
          'label-music': 'What kind of music website do you want to create?',
          'label-design': 'What do you want to create a website for?',
          'label-singleEvent': 'What type of event are you planning?',
          'import-site-confirm': {
            'title': 'Wix ADI wants to create your unique website',
            'body': 'To get a website that’s uniquely yours, Wix ADI needs to confirm that you own the content of the site you provided.',
            'validate-content': 'By clicking "Next", you confirm that you own this site\'s content.'
          },
          'import-site-content-tip': '<span class=\'label\'>Tip:</span> This step is especially recommended if you’d like to redesign a website<br>you own. ADI will magically recreate a shiny new version of your website<br>in Wix using your images and texts.',
          'search-label': 'Search for Your Website Type or Business Type',
          'search-label-Stores': 'What Kind of Online Store Do You Want to Create?',
          'search-label-portfolio-cv': 'What Kind of Portfolio or CV Do You Want to Create?',
          'search-label-photography': 'What Kind of Photography Website Do You Want to Create?',
          'search-label-music': 'What Kind of Music Website Do You Want to Create?',
          'search-label-Blog': 'What Kind of Blog Do You Want to Create?',
          'example-label': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Law Firm</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Travel Agency</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Make Up Artist</a>',
          'example-label-business': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Law Firm</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Real Estate Agency</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Personal Trainer</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Construction Company</a>',
          'example-label-Stores': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Online Clothing Store</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Online Accessories Shop</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Online Skin Care Store</a>',
          'example-label-portfolio-cv': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Graphic Design Portfolio</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Resume</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Writing Portfolio</a>',
          'example-label-photography': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Wedding Photographer</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Travel Photographer</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Baby Photography Studio</a>',
          'example-label-music': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Classical Musician</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Rock Band</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>DJ</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Recording Studio</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Wedding Singer</a>',
          'example-label-health-wellness': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Personal Trainer</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Make Up Artist</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Yoga Studio</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Dental Clinic</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Hair Salon</a>',
          'example-label-Blog': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Personal Blog</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Travel Blog</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>News Blog</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Fashion Blog</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Food Blog</a>',
          'example-label-other': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Elementary School</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Sports Club</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Church</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Army & Navy Store</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Art Center</a>',
          'example-label-design': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Web Design Portfolio</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Creative Agency</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Illustrator Portfolio</a>',
          'search-tip': '<span class=\'label\'>Tip:</span> Select your business or website type so ADI can start custom building a website for your needs',
          'no-result-label': 'We couldn’t find anything that matched your search.',
          'no-result-label-new': 'We couldn’t find anything that matched your search.<br> You can start with one of the following:',
          'no-result-popover-label': 'Can’t find what you’re looking for? Start with one of the following:',
          'invalid-characters-label': 'Please enter text in English',
          'related-results-label': 'Related Results',
          'examples-label': 'EXAMPLES',
          'suggestions-label': 'SUGGESTIONS',
          'example-category': {
            'travel-agency': 'Travel Agency',
            'elementary-school': 'Elementary School',
            'real-estate-agency': 'Real Estate Agency',
            'online-sporting-goods-store': 'Online Sporting Goods Store',
            'make-up-artist': 'Make Up Artist',
            'consulting-firm': 'Consulting Firm',
            'non-profit-organization': 'Non-Profit Organization',
            'coaching-professional': 'Coaching Professional',
            'cleaning-service': 'Cleaning Service',
            'marketing-agency': 'Marketing Agency',
            'online-clothing-store': 'Online Clothing Store',
            'online-jewelry-store': 'Online Jewelry Store',
            'online-home-goods-store': 'Online Home Goods Store',
            'online-health-food-store': 'Online Health Food Store',
            'online-hair-extensions-store': 'Online Hair Extensions Store',
            'portfolio': 'Portfolio',
            'artist': 'Artist',
            'actor': 'Actor',
            'resume': 'Resume',
            'cv': 'CV',
            'event-photographer': 'Event Photographer',
            'photography-portfolio': 'Photography Portfolio',
            'fashion-photography-studio': 'Fashion Photography Studio',
            'photographer': 'Photographer',
            'photography-studio': 'Photography Studio',
            'dj': 'DJ',
            'recording-studio': 'Recording Studio',
            'musician': 'Musician',
            'rock-band': 'Rock Band',
            'hip-hop-artist': 'Hip Hop Artist',
            'massage-therapist': 'Massage Therapist',
            'salon': 'Salon',
            'skin-care-clinic': 'Skin Care Clinic',
            'nutritionist': 'Nutritionist',
            'fashion-blog': 'Fashion Blog',
            'news-blog': 'News Blog',
            'blogger': 'Blogger',
            'health-blog': 'Health Blog',
            'business-blog': 'Business Blog',
            'school': 'School',
            'charity': 'Charity',
            'author': 'Author',
            'graphic-designer': 'Graphic Designer',
            'architecture-firm': 'Architecture Firm',
            'design-studio': 'Design Studio',
            'wedding': 'Wedding',
            'conference': 'Conference',
            'birthday-party': 'Birthday Party',
            'meetup': 'Meetup',
            'marathon': 'Marathon'
          }
        },
        'import-site-content': {
          'title': 'Want to import content from an existing site? Enter the website address below.',
          'address-does-not-exist': 'Enter your website address like this: www.sitename.com and try again.',
          'address-could-not-found': 'Wix ADI couldn\'t find any content in this website. Please enter a different web address.',
          'address-message': 'Enter your existing website address'
        },
        'import-youtube-url': {
          'channel-does-not-exist': 'This channel isn’t showing up. Double check the URL and try again. '
        },
        'general-categories': {
          'general': {
            'local-business': 'Local Business',
            'online-store': 'Online Store',
            'other': 'Other',
            'general-blog': 'General Blog',
            'portfolio-and-cv': 'Portfolio & CV',
            'design-business': 'Design Business',
            'music-business': 'Music Business',
            'photographer': 'Photographer',
            'beauty-business': 'Beauty Business'
          }
        },
        'blocked-category': {
          'title': 'Looks like Wix Editor is the best option for you!',
          'title-new': 'The Wix Editor<br> Is the Best<br> Option for You!',
          'description': 'With more than 500 stunning templates to choose from and thousands of advanced design features to easily drag & drop, the Wix Editor is the best website builder in the galaxy.',
          'description-new': 'With more than 500 stunning templates to choose from<br> and thousands of advanced design features to easily drag & drop,<br> the Wix Editor is the best builder in the galaxy.',
          'back-button': 'Go to Wix Editor'
        },
        'business-location': {
          'optional-label': 'OPTIONAL',
          'subline': 'Address is not relevant for you? You can <span class=\'link-button\' data-hook=\'no-address-skip\' ng-click=\'$ctrl.skip()\'>skip</span> to the next page.',
          'input-label': 'Where is your business located?',
          'input-placeholder': 'Enter your address',
          'input-placeholder-singleEvent': 'Enter the address',
          'label-singleEvent': 'Where is your event located?',
          'search-tip': 'You can always change the location later.',
          'input-label|abTranslate_1': 'Where are you located?'
        },
        'business-dates': {
          'input-label': 'When is your event?',
          'add-date': 'End Date & Time',
          'wrong-start-date': 'Choose a future date for this event.',
          'wrong-end-date': 'Choose an end date that comes after the start date.',
          'change-timezone': 'Change',
          'date-placeholder': 'Choose a Date',
          'time-placeholder': 'Choose a Time',
          'date-label-from': 'Start',
          'date-label-to': 'End',
          'time-item': '{{hours}}:{{minutes}}'
        },
        'event-details': {
          'date': '{{date}} at {{time}}',
          'from-date': 'FROM {{date}} at {{time}}',
          'to-date': 'TO {{date}} at {{time}}',
          'location-tbd': 'LOCATION TBD',
          'date-tbd': 'DATE TBD',
          'name-label': 'EVENT NAME',
          'description-label': 'DESCRIPTION (OPTIONAL)',
          'address-label': 'LOCATION',
          'dates-label': 'DATE & TIME',
          'name-placeholder': 'Enter Event Name',
          'description-placeholder': 'Tell people more about this event in 300 characters or less.'
        },
        'service': {
          'title': 'Does your website need any of the following features?',
          'title-new': 'Do you need<br> any of these<br> features?',
          'Stores': 'Online store',
          'Bookings': 'Appointment booking online',
          'Blog': 'Blog',
          'GetSubscribers': 'User subscription'
        },
        'contentExperiment': {
          'service': {
            'Stores': 'Sell online',
            'Bookings': 'Take bookings & appointments',
            'Blog': 'Create a blog',
            'Blog2': 'Create a blog',
            'GetSubscribers': 'Get subscribers'
          }
        },
        'business-name': {
          'empty': 'BUSINESS NAME',
          'input-placeholder': 'Add your business or website name',
          'input-label': 'What is the name of your website or business?',
          'label-blog-website': 'What is the name of your blog or website?',
          'label-band': 'What is the name of your band?',
          'label-business': 'What is your name or your business name?',
          'label-choir': 'What is the name of your choir?',
          'label-stagename': 'What is your stage name?',
          'label-artist-or-band': 'What is your artist name or band\'s name?',
          'label-artist': 'What is your artist name?',
          'label-band2': 'What is your band\'s name?',
          'label-fullname': 'What is your full name?',
          'label-singleEvent': 'What is the name of your event?'
        },
        'youtube-channel': {
          'label': 'Want to sync your YouTube channel to your website?',
          'placeholder': 'Paste your YouTube channel URL here...'
        },
        'search-confirm': {
          'title': 'Wix ADI wants to learn about you:',
          'title-old': 'Wix ADI wants to learn about you:\n{{ businessName }}',
          'details1': 'Wix ADI will start by gathering info from\npublic internet sources.',
          'details2': 'You’ll be able to review and edit everything before you go live.',
          'subline': 'Nothing will be published online without your review & approval.',
          'title|abTranslate_1': 'Help Wix ADI get to know you:',
          'details1|abTranslate_1': 'Wix ADI will search online to gather info for your website.'
        },
        'select-user': {
          'title': 'Is one of these your business?',
          'title-error': 'Try searching again.',
          'title-no-results': 'We couldn\'t find any information about your business.',
          'results-multiple': 'results found',
          'results-single': 'result found',
          'results-none': 'Search again or <button ng-click=\'$ctrl.skip()\'>skip</button> to add details yourself',
          'results-error': 'Feel free to <button ng-click=\'$ctrl.skip()\'>skip</button> to add details yourself',
          'title-no-results|abTranslate_1': 'We didn’t find your business.',
          'results-none|abTranslate_1': 'Feel free to <button ng-click=&#39;$ctrl.skip()&#39;>move forward</button> to easily add your info',
          'select-button': 'That\'s Me'
        },
        'logo': {
          'uploading': 'UPLOADING...',
          'upload': 'Upload<br>logo',
          'replace': 'REPLACE',
          'replaceLogo': 'REPLACE LOGO',
          'remove': 'REMOVE',
          'edit': 'EDIT LOGO',
          'add': 'ADD LOGO',
          'error': 'Uh oh. It didn\'t load. Please try again'
        },
        'start': {
          'button': 'Start'
        },
        'recaptcha': {
          'title': 'Let\'s confirm you are not a robot',
          'title-new': 'Let\'s confirm<br> you are not a<br> robot',
          'terms': 'By checking this box, you agree to our <a href=\'https://www.wix.com/about/terms-of-use\' target=\'_blank\'>Terms of Use</a><br>and acknowledge that you read our <a href=\'https://www.wix.com/about/privacy\' target=\'_blank\'>Privacy Policy</a>',
          'terms-new': 'By clicking next, you agree to our <a href=\'https://www.wix.com/about/terms-of-use\' target=\'_blank\'>Terms of Use</a><br>and acknowledge that you read our <a href=\'https://www.wix.com/about/privacy\' target=\'_blank\'>Privacy Policy</a>'
        }
      },
      'new-intro': {
        'category-search': {
          'label': 'What type of site do you want to create?',
          'sublabel': 'Choose your business or website type to get started.'
        },
        'import-site-content': {
          'title': 'Want to import<br> content from your<br> existing site?',
          'sublabel': 'If you already have a website, enter the address so ADI can import your text and images.'
        },
        'import-content': {
          'skip-button-name': 'Skip',
          'skip-content': 'this section if you don’t have a website yet.'
        },
        'business-location': {
          'input-label': 'Where is<br> your business<br> located?',
          'subline': '<span class=\'link-button\' data-hook=\'no-address-skip\' ng-click=\'$ctrl.skip()\'>Skip</span> this section if your business has no physical location.'
        },
        'business-name': {
          'input-label': 'What is the<br> name of your<br> business or<br> website?',
          'label-blog-website': 'What is the<br> name of your<br> Blog or<br> Website?',
          'label-band': 'What is the<br> name of your<br> Band?',
          'label-business': 'What is your<br> name or your<br> Business name?',
          'label-choir': 'What is the<br> name of your<br> choir?',
          'label-stagename': 'What is your<br> stage name?',
          'label-artist-or-band': 'What is your<br> artist or<br> band\'s name?',
          'label-artist': 'What is your<br> artist name?',
          'label-band2': 'What is your<br> band\'s name?',
          'label-fullname': 'What is your<br> full name?',
          'label-singleEvent': 'What is the<br> name of your<br> event?'
        },
        'business-card-editable': {
          'email': {
            'label': 'Email'
          }
        },
        'business_card': {
          'logo': {
            'delete': 'Delete',
            'replace': 'Replace'
          }
        },
        'select-user': {
          'in': 'in',
          'name': 'Name',
          'address': 'Address',
          'no-results': 'We didn’t find your business online'
        },
        'blocked-category': {
          'title-new': 'The Wix Editor<br />is the best option<br />for you'
        },
        'service': {
          'title-new': 'Does your website<br />need any of<br />these features?'
        },
        'search-confirm': {
          'title': 'Help Wix ADI<br />get to know:<br />{{ businessName }}',
          'details': 'Wix ADI will search online to gather info for your website. You’ll be able to review and edit everything before you go live.'
        },
        'tour': {
          'logoExtraction': {
            'step3000': {
              'title': 'Want to create a color palette from your logo?'
            }
          }
        }
      },
      'spinner': {
        'message': {
          '0': 'Loading everything you need',
          '1': 'It all starts with your stunning website',
          '2': 'Loading everything you need to be stunning',
          '3': 'Wait for it…',
          '4': 'I’m on it…',
          '5': 'Loading awesomeness...',
          '6': 'Creating awesome stuff...',
          '7': 'Loading the future...'
        },
        'step': {
          'step': 'STEP',
          'out-of': 'OUT OF'
        }
      },
      'builder': {
        'progress-bar': {
          'step-message': {
            'sc-adding-header-and-footer': 'Adding a Header and a Footer',
            'sc-arranging-text-images': 'Arranging Text and Images',
            'sc-adding-site-colors': 'Adding Your Site Colors',
            'sc-adding-site-fonts': 'Styling Your Site Fonts',
            'header-and-footer': 'Arranging Your Header and Footer',
            'online-content': 'Importing Your Online Content',
            'adding-section': 'Adding a {{type}} Section',
            'adding-page': 'Adding {{pageTitle}} Page',
            'finishing-touches': 'Adding the Finishing Touches',
            'adding-application': 'Adding Your {{type}} App',
            'render-mobile-pages': 'Optimizing Your Site on Mobile'
          }
        },
        'pages-panel': {
          'settings': {
            'page-seo': 'Page SEO',
            'set-as-homepage': 'Set as Homepage',
            'rename': 'Rename',
            'duplicate': 'Duplicate',
            'hide': 'Hide',
            'show': 'Show',
            'subpage': 'Subpage',
            'main-page': 'Main Page',
            'delete': 'Delete'
          }
        },
        'seo-panel': {
          'title': 'SEO',
          'page-title': {
            'label': 'title on search engine'
          },
          'description': {
            'label': 'Page Description'
          },
          'keywords': {
            'label': 'keywords'
          },
          'page-url': {
            'label': 'Page URL'
          }
        },
        'edit_mode': {
          'desktop': 'Desktop',
          'mobile': 'Mobile'
        },
        'template-translation-drop-down': {
          'send-translation': 'Send to Translation',
          'preview-translation': 'Preview'
        },
        'mobile-panel-edit-notice': 'Changes you make on mobile won\'t affect how your site looks on desktop.',
        'drop-target-hint': 'Drag Section Here',
        'drop-target-drag-over': 'Release to Drop Section Here',
        'design': 'Site Design',
        'design-label': 'Design',
        'pages': 'Pages',
        'back-button': 'Back',
        'design_description': 'Pick a theme for your site and customize it.',
        'upgrade': 'Upgrade',
        'site': 'Site',
        'loading': 'Loading',
        'save': 'Save',
        'merge': 'Merge Page',
        'unmerge': 'Unmerge Page',
        'saved': 'Saved',
        'saving': 'Saving',
        'page-from-item': 'Create a page from this item',
        'preview': 'Preview',
        'publish': 'Publish',
        'account': {
          'my-sites': 'My Sites',
          'settings': 'Account Settings',
          'billing': 'Billing & Payments',
          'new-site-link': 'https://www.wix.com/new/vertical?ref=ADI',
          'my-sites-link': 'https://www.wix.com/account/sites',
          'settings-link': 'https://www.wix.com/account/settings'
        },
        'add-section': 'Add Section',
        'sections': {
          'header': 'Header',
          'footer': 'Footer',
          'blank': 'Blank',
          'Welcome': 'Welcome',
          'Service': 'Services',
          'About': 'About',
          'TeamMember': 'Team Members',
          'Testimonial': 'Testimonials',
          'Project': 'Projects',
          'Product': 'Products',
          'Client': 'Clients',
          'Feature': 'Features',
          'FAQ': 'FAQ',
          'Event': 'Events',
          'Past_Events': 'Past Events',
          'News': 'News',
          'Contact': 'Contact',
          'OpeningHours': 'Opening Hours',
          'Quote': 'Quote',
          'CV': 'CV',
          'Widget': 'Headliner',
          'Portfolio': 'Photo Gallery',
          'GetSubscribers_Widget': 'Subscribe',
          'Instagram_Widget': 'Instagram',
          'Chat_Widget': 'Chat',
          'Stores_Product_specific_Widget': 'Featured Product',
          'Stores_Slider_Gallery_Widget': 'Product Slider',
          'Stores_Grid_Gallery_Widget': 'Product Gallery',
          'Blog_Post_Gallery': 'Blog Post Gallery',
          'Music_Widget': 'Music Player',
          'BandsInTown_Widget': 'Tour Dates',
          'ProGallery_Widget': 'Gallery',
          'Bookings_Widget': 'Bookings Widget',
          'Events_Single': 'Event',
          'Events_Multiple': 'Events List',
          'Blog2_Custom_Feed_Widget': 'Blog Feed',
          'Video_Widget': 'Video Player',
          'Tpa_Header': 'Section Title',
          'Files': 'Files',
          'Price': 'Price List',
          'ScheduleItem': 'Schedule',
          'Stores': 'Stores',
          'from-the-blog': 'From The Blog'
        },
        'section-name-in-menu': {
          'title': 'Display name in menu'
        },
        'manage-tpa-button': 'Manage',
        'edit-section-button': 'Edit',
        'manage-tpa': 'Manage {{TPA}}',
        'manage-tpa-Forum': 'Manage Forum',
        'manage-tpa-Stores': 'Manage Store',
        'manage-tpa-Members': 'Manage Member\'s Area',
        'manage-tpa-Bookings': 'Manage Bookings',
        'manage-tpa-Blog': 'Manage Blog',
        'manage-tpa-Blog2': 'Manage Blog',
        'manage-tpa-Events': 'Manage Events',
        'manage-tpa-Chat_Widget': 'Wix Inbox',
        'manage-tpa-sub-menu': {
          'label': {
            'blog': 'Blog',
            'bookings': 'Bookings',
            'store': 'Stores',
            'events': 'Events',
            'music': 'Music',
            'video': 'Video',
            'all-apps': 'All Apps'
          }
        },
        'manage-apps': 'Manage Apps',
        'manage-apps-small': 'Apps',
        'manage': 'Manage',
        'design-panel': {
          'title': 'Themes'
        },
        'apps-panel': {
          'title': 'Apps',
          'subtitle': 'Boost your website with powerful Apps.',
          'open-app': 'Open App',
          'add-more': 'Add Again',
          'remove': 'Delete',
          'footer': {
            'text': 'Looking for more Apps?',
            'link': 'Go to Wix Editor'
          },
          'loader': 'Loading Apps',
          'app': {
            'title': {
              'Chat_Widget': 'Chat',
              'Forum': 'Forum',
              'Blog': 'Blog',
              'Blog2': 'Blog',
              'AllMembers': 'Members',
              'Stores': 'Online Store',
              'Bookings': 'Bookings',
              'Members': 'Member\'s Area',
              'Events': 'Events',
              'BandsInTown_Widget': 'Bands In Town',
              'Music_Widget': 'Music',
              'Video_Widget': 'Video',
              'Instagram_Widget': 'Instagram Feed',
              'Events_Multiple': 'Events List',
              'Events_Single': 'Event'
            },
            'description': {
              'Forum': 'Build an online community on your site.',
              'Chat_Widget': 'Chat with site visitors - anytime, anywhere.',
              'Blog': 'Blog about all the things<br>you love.',
              'Blog2': 'Blog about <br>all the things you love.',
              'Stores': 'Start selling online directly from your website.',
              'Bookings': 'Let visitors schedule services on your site.',
              'Members': 'Let visitors sign up to become your site members.',
              'BandsInTown_Widget': 'Sell tickets to your shows and tours from your site.',
              'Music_Widget': 'Stream and sell your music commission free.',
              'Video_Widget': 'Everything you need to showcase your videos.',
              'Instagram_Widget': 'Show your Instagram pictures and videos.',
              'Events_Multiple': 'Easily create and manage all your events online.',
              'Events_Single': 'Have an event?<br>Create and manage it online.'
            }
          }
        },
        'switch-color': {
          'panel-headline-text': 'Colors',
          'panel-paragraph': 'Choose a color combination.<br />Go to <a ng-click="$ctrl.goToColorationPanel()" data-hook="goto-site-colors">Site Colors</a> to change your site\'s color palette.',
          'panel-paragraph-only-one-option': 'There are no color options for this design.<br /><a ng-click="$ctrl.goToDesignPanel()" adi-automation="no-color-switch-preset" data-hook="goto-switch-preset">Choose a different design</a> to view more color options.'
        },
        'section-background': {
          'panel-headline-text': 'Patterns',
          'panel-headline-text-header': 'Header Background',
          'panel-headline-text-list': 'List Background',
          'panel-paragraph-text': 'Click to select your favorite pattern.',
          'show-background': 'Show background',
          'image-settings': 'Image Settings',
          'pattern-settings': 'Change Colors',
          'background-settings': {
            'image': {
              'position': {
                'top_left': 'Top Left',
                'top': 'Top',
                'top_right': 'Top Right',
                'left': 'Left',
                'center': 'Center',
                'right': 'Right',
                'bottom_left': 'Bottom Left',
                'bottom': 'Bottom',
                'bottom_right': 'Bottom Right'
              },
              'title': 'Image Position',
              'lower-title': 'IMAGE POSITION',
              'parallax-paragraph': '<a ng-click="$ctrl.goToPreview()" data-hook="goto-preview">Preview your site</a> to view<br />this effect.',
              'body': 'Choose which part of<br/>this image shows.'
            }
          },
          'gallery-settings': 'Organize Images',
          'upload-button': 'Upload Background',
          'upload': {
            'image': 'Image',
            'video': 'Video',
            'gallery': 'Gallery'
          },
          'categories': {
            'color': 'Colors',
            'media': 'Media',
            'pattern': 'Patterns'
          }
        },
        'section-override-warning': {
          'success': 'Style applied to all sections.',
          'animations': 'Some of your other sections have different animations.',
          'scroll-type': 'Some of your other sections have different Scroll effects.',
          'font-size': 'Some of your other sections have different Font sizes.',
          'replace-sections': ' <a data-hook=\'section-override-link\' href="" ng-click="$ctrl.overrideSections()">Apply this style</a> to all sections.'
        },
        'section-design': {
          'panel-headline-text': 'Section Design',
          'panel-headline-text-header': 'Site Header Design',
          'panel-headline-text-footer': 'Site Footer Design',
          'panel-header-text': 'Click to select or customize your favorite design.<br />Go to <a ng-click="$ctrl.goToDesignMode()" data-hook="goto-site-design">Site Design</a> to change the entire site design.',
          'mobile-headline-text': 'Click to select your favorite mobile section design.',
          'panel-header-text-tpa': 'Click to select your favorite {{TPA_NAME}} design.',
          'panel-header-text-header': 'Your header shows on all your pages.<br/>Pick your favorite and customize it.',
          'TPA_NAME': {
            'Music_Widget': 'Music Player',
            'BandsInTown_Widget': 'Tour Dates',
            'Forum': 'Forum',
            'Blog': 'Blog',
            'Blog2': 'Blog',
            'Blog2_Custom_Feed_Widget': 'Blog Feed',
            'Blog_Post_Gallery': 'Blog',
            'ProGallery_Widget': 'Pro Gallery',
            'Stores': 'Online Store',
            'Stores_Slider_Gallery_Widget': 'Product Slider',
            'Stores_Product_specific_Widget': 'Featured Product',
            'Stores_Grid_Gallery_Widget': 'Product Gallery',
            'Stores_Product_Widget': 'Product',
            'Bookings': 'Book Now',
            'GetSubscribers_Widget': 'Get Subscribers',
            'Video_Widget': 'Video Player',
            'Events_Single': 'Event',
            'Events_Multiple': 'Events List',
            'Members': 'Member\'s Area',
            'Chat': 'Chat',
            'Stores_Grid_Gallery_Widget|abTranslate_1': 'New Collection'
          },
          'customize-design': 'Customize Design',
          'change-colors': 'Change Colors',
          'menu': {
            'media': 'Media',
            'headerbg': 'Header',
            'listbg': 'List',
            'color': 'Color',
            'font': 'Font Size',
            'font-alignment': 'Text Settings',
            'height': 'Height',
            'animations': 'Animation'
          }
        },
        'layout-control': {
          'customize': 'Customize',
          'change-design': 'Change Design'
        },
        'social-panel': {
          'title': 'SOCIAL',
          'link-input': {
            'placeholder': 'Paste link here...'
          }
        },
        'field-editor': {
          'single': {
            'freeze-header': 'Freeze Header',
            'title': 'Title',
            'subtitle': 'Subtitle',
            'description': 'Description',
            'long': 'Paragraph',
            'form': 'Contact Form',
            'button': 'Button',
            'media': 'Media',
            'logo': 'Logo',
            'menu': 'Menu',
            'site-email': 'Site Email',
            'copyright-message': 'Copyright Message',
            'tagline': 'Tagline',
            'business-name': 'Business Name',
            'phone-number': 'Phone Number',
            'fax': 'FAX',
            'address': 'Address',
            'name': 'Name',
            'map': 'Map',
            'email': 'Email'
          },
          'subscribe': 'Subscribe',
          'list': {
            'item': {
              'title': 'Name',
              'long': 'Description'
            }
          },
          'list-header': 'Header {{text}}',
          'list-item': 'Item {{text}}',
          'list-footer': 'Footer {{text}}',
          'social-title': 'Social',
          'social-paragraph': 'Update your social links',
          'login-title': 'Member Login Bar'
        },
        'media-editor': {
          'media-bg-warning': 'Color isn\'t visible because image opacity is set to 100%',
          'opacity-warning': 'The image isn\'t shown because it is set on 0% opacity. <a data-hook=\'opacity-warning-link\' ng-click=\'$ctrl.resetOpacity()\'>Reset</a>',
          'edit-replace-button': 'Edit & Replace',
          'image-position': {
            'title': 'Image position'
          }
        },
        'add-section-recommended': 'RECOMMENDED',
        'add-section-others': 'OPTIONAL',
        'add-section-see-all': 'See all',
        'add-section-see-less': 'See less',
        'add-page': 'Add Page',
        'preview-linked-content': 'From',
        'preview-linked-page-content': 'Used in',
        'preview-flags': {
          'fix': 'Fixed Header',
          'slideshow': 'Slideshow'
        },
        'empty-page-title': 'Add Section',
        'empty-page-title-active': 'Great, you\'re on your way.',
        'empty-page-sub-title': 'Hit the + icon to easily add some to your stunning website-',
        'empty-page-sub-title-active': 'Just drag and drop any of the recommended sections.',
        'site-menu': {
          'settings': 'Site Settings',
          'history': 'Site History',
          'connect-domain': 'Connect Domain',
          'my-business-info': 'My Business Info',
          'my-dashboard': 'My Dashboard',
          'site-dashboard': 'Site Dashboard',
          'view-live': 'View Site',
          'view-published-site': 'View Published Site',
          'feedback': 'Give Feedback',
          'start-new-site': 'Create New Site',
          'news': 'News & Updates',
          'seo-wiz': 'Get Found on Google',
          'change-business-details': 'Update Website Type'
        },
        'top-bar': {
          'preview': {
            'desktop': 'Desktop Preview Mode',
            'mobile': 'Mobile Preview Mode',
            'from-intro-msg': 'Click \'Edit Site\' to start customizing',
            'preview-msg': 'You are currently in preview mode'
          },
          'add-section': 'Section to Page',
          'add-app': 'Apps'
        },
        'list-items-title': 'List Items',
        'list-items-title-slideshow': 'Slideshow Items',
        'add-slide': '+ Add Slide',
        'save-as-template': 'Save As Template',
        'upgrade-dropdown': {
          'title': 'Upgrade to Yearly Unlimited and Save!',
          'sale-title': 'Limited Time Offer: Upgrade Now to Save {{text}}% <br> on Our Popular Premium Plans',
          'bullet-1': 'Get a FREE domain to connect to your site',
          'bullet-2': 'Enjoy unlimited bandwidth & extra storage',
          'bullet-3': 'Add Google Analytics to your site',
          'compare-plans': 'Compare Plans',
          'get-yearly-unlimited': 'Get Yearly Unlimited',
          'upgrade-save': 'Upgrade & Save {{text}}%'
        },
        'fake-browser': {
          'choose-domain': 'Connect Your Domain',
          'suggest-domain-label': '<span title="www.{{domain}}" class="suggest-domain-address">www.{{domain}}</span> <span class="suggest-domain-message">is available.</span>',
          'suggest-domain-button': 'Connect Your Domain',
          'manage-pages': 'Manage Pages',
          'use-advanced-editor': 'Use Advanced Editor'
        },
        'fake-browser2': {
          'choose-domain': 'Connect Domain'
        },
        'open-site-loader': {
          'video-title': 'L O A D I N G . . .',
          'message1': '',
          'message2': '',
          'message3': '',
          'message4': '',
          'message5': '',
          'message6': '',
          'message7': '',
          'message8': '',
          'message9': '',
          'message10': '',
          'message11': '',
          'message12': '',
          'message13': '',
          'message14': '',
          'message15': '',
          'message16': '',
          'message17': '',
          'message18': '',
          'message19': '',
          'message20': ''
        },
        'color-box': 'Box',
        'logoExtraction': {
          'step3000': {
            'title': '',
            'content': 'Would you like to create<br/>a color palette from your logo?',
            'skip': 'No Thanks',
            'button': 'Create Palette'
          },
          'step3100': {
            'title': '',
            'content': 'Creating palette'
          },
          'step3200': {
            'title': '',
            'newPaletteFromLogo': {
              'title': '',
              'content': 'Here\'s the color palette ADI<br/>created for you'
            },
            'content': 'Here\'s the color palette ADI<br/>created for you',
            'skip': 'No Thanks',
            'button': 'Use These Colors'
          }
        }
      },
      'init': {
        'error': {
          'access': 'You do not have access to this site',
          'load': 'Cannot load this site',
          'redirecting': '{{error}}, redirecting...'
        }
      },
      'preset-title': {
        'switch-preset': 'Click to change design',
        'click': 'Click or drag section',
        'click-or-drag': 'Click or drag section',
        'add': 'Click to add page',
        'change-color': 'Click to change colors'
      },
      'page-preset-previews': {
        'edit-site': 'Edit Site',
        'preview-mode': {
          'edit-site': 'Edit Site'
        },
        'preview': 'Preview',
        'title': 'Wix ADI Designed These Websites For You',
        'description': 'Pick your favorite design and make it yours.<br>You can easily customize colors, images and more.',
        'skip': 'Skip'
      },
      'toasters': {
        'preview-in-manual-save': 'previews may not be fully updated in manual save mode.',
        'page-deleted': 'This page has been deleted.',
        'page-hidden': 'You\'ve hidden this page from your menu.',
        'section-deleted': 'This section has been deleted.',
        'section-moved': 'This section has been moved.',
        'list-item-added': 'List item added.',
        'list-item-deleted': 'List item deleted.',
        'list-item-duplicated': 'List item duplicated.',
        'list-item-media-type-changed': 'Switching media type for all items.',
        'list-item-design-changed': 'Updating all items in this list with your new design.',
        'list-item': {
          'reset': 'Your item colors were reset.',
          'apply-to-all': 'Your color was applied to all items.'
        },
        'could-not-fit-text': 'Design has been updated to fit your text.'
      },
      'popups': {
        'edit-now': 'Edit Now',
        'welcome-to-mobile-editor-new': {
          'heading': 'Check Out Your Site on Mobile',
          'text': 'You can make changes to layouts, hide elements and more. Changes you make won\'t affect how your site looks on desktop.'
        },
        'welcome-to-mobile-editor-existing': {
          'heading': 'New! Edit Your Site on Mobile',
          'heading-next': 'Your Changes Will Stay Here',
          'text': 'Try new designs, hide elements and more.',
          'text-next': 'Changes you make won\'t affect how your site looks on desktop.'
        },
        'mobile-editor': {
          'Chat_Widget': 'To customize Chat,<br>switch to desktop mode.'
        },
        'change-to-editor': {
          'title': 'Edit Your Site in the Wix Editor',
          'subtitle': '',
          'bullets': {
            '1': 'Easy drag and drop',
            '2': '1000s of advanced design features',
            '3': 'Specialized Apps for Restaurants, Hotels, Events and more',
            '2-new': '1000s of advanced design features',
            '3-new': 'Specialized Apps for Restaurants, Hotels, Events and more'
          },
          'warning': 'If you save your site in the Wix Editor, you won’t be able to continue editing this website in Wix ADI.',
          'warning-new': 'If you want to come back to Wix ADI, any changes you saved in the Wix Editor won’t come with you',
          'go-to-editor': 'Go to the Editor',
          'cancel': 'Keep Editing Here'
        },
        'deletesection': {
          'heading': 'Delete This Section',
          'text': 'Are you sure you want to delete<br/>this section?'
        },
        'delete-chat': {
          'heading': 'Deleting Chat?',
          'text': 'You won’t be able to chat with<br/>your site visitors online.'
        },
        'deleteitem': {
          'heading': 'Delete Item',
          'text': 'Are you sure you want to delete this item?'
        },
        'delete-list-item': {
          'heading': 'Delete Item',
          'text': 'Are you sure you want to delete this item?'
        },
        'movesection': {
          'heading': 'Move Section',
          'text': 'Select Page'
        },
        'add-app': {
          'heading': 'Add {{TPA}}'
        },
        'after-page-add': {
          'heading': 'Congrats!',
          'text': 'You\'ve added a new page to your website.',
          'accept': 'Keep Going'
        },
        'after-tpa-forum-add': {
          'heading': 'You Have a Forum',
          'text': 'Set up and manage your forum here.'
        },
        'after-tpa-add': {
          'text': 'You\'ve added {{TPA}} to your website!'
        },
        'after-tpa-events-add': {
          'heading': 'Nice! Events Added'
        },
        'after-tpa-events-add-section': {
          'text': 'Set up and manage your event here. Add all the details, collect RSVPs, sell tickets & more.'
        },
        'after-tpa-blog-add': {
          'heading': 'You Have a Blog',
          'text': 'Now you can create and schedule posts, add comments, get followers and more.'
        },
        'after-tpa-blog-add-section': {
          'text': 'We’ve added a new website page dedicated to your blog. Easily write, edit and schedule posts, showcase photos & videos,<br/> add a comments section & more.'
        },
        'after-tpa-blog2-add': {
          'heading': 'You Have a Blog',
          'text': 'Now you can create and schedule posts, add comments, get followers and more.'
        },
        'after-tpa-blog2-add-section': {
          'text': 'We’ve added a new website page dedicated to your blog. Easily write, edit and schedule posts, showcase photos & videos,<br/> add a comments section & more.'
        },
        'after-tpa-stores-add': {
          'heading': 'You Have an Online Store',
          'text': 'Choose a stunning gallery, add your products, connect payments and more.'
        },
        'after-tpa-stores-add-section': {
          'text': 'Choose a stunning gallery, add your products, connect payments and more.'
        },
        'after-tpa-bookings-add': {
          'heading': 'Take Bookings Online',
          'text': 'Add services, connect payments & get paid online - it’s 100% commision free.'
        },
        'after-tpa-bookings-add-section': {
          'text': 'Take bookings 24/7, get paid online and manage your schedule on the go.<br/>It’s all 100% commission free!'
        },
        'after-tpa-getsubscribers-add': {
          'heading': 'Congrats!',
          'text': 'You\'ve just added a subscribe section. Now people can easily sign up to get all your updates. <br/> <br/>'
        },
        'after-tpa-getsubscribers-add-section': {
          'text': 'You\'ve just added a subscribe section. Now people can easily sign up to get all your updates. <br/> <br/>'
        },
        'after-tpa-getsubscribers-learn-more': 'Learn More',
        'after-tpa-music-add': {
          'heading': 'Everything You Need<br/>For Your Music',
          'text': 'Easily add, stream & sell your music —<br/>directly from your site!'
        },
        'after-tpa-music-add-section': {
          'text': 'Easily add, stream & sell your music —<br/>directly from your site!'
        },
        'after-tpa-bandsintown-add': {
          'heading': 'Promote & Sell Tickets to<br/>Upcoming Shows',
          'text': 'Display concert info, sell tickets & more when you connect your Bandsintown account.'
        },
        'after-tpa-bandsintown-add-section': {
          'text': 'Display concert info, sell tickets & more when you connect your Bandsintown account.'
        },
        'after-tpa-progallery-add': {
          'heading': 'The Wix Pro Gallery<br/>is Now on Your Site',
          'text': 'Upload your photos and videos and display them in a stunning gallery on your site.',
          'button': 'Get Started'
        },
        'after-tpa-progallery-add-section': {
          'text': 'Upload your photos and videos and display them in a stunning gallery on your site.'
        },
        'after-tpa-chat_widget-add': {
          'heading': 'Great! Chat Was Added',
          'text': 'Publish your site so you can chat with site visitors from desktop and mobile.',
          'button': 'Got It'
        },
        'after-tpa-video-add': {
          'heading': 'Welcome to Wix Video Player'
        },
        'after-tpa-video-add-section': {
          'text': 'Easily upload, stream & sell your videos - directly from your site.'
        },
        'after-tpa-instagram-add': {
          'heading': 'Nice! You Have an<br/>Instagram Feed'
        },
        'after-tpa-instagram-add-section': {
          'text': 'Connect an Instagram account to display photos and videos in a feed on your site.'
        },
        'page-add-initiation': {
          'heading': 'Here\'s your website menu',
          'text': 'See how your menu works by clicking Preview in the top right corner.',
          'accept': 'Got It'
        },
        'page-delete-confirmation': {
          'heading': 'Delete page',
          'text': 'Are you sure you want to delete this page?'
        },
        'tpa-delete-confirmation': {
          'heading': 'Deleting {{TPA}}?',
          'text': 'All the features of this App<br/> will be removed from your site.'
        },
        'tpa-delete-all-widgets-confirmation': {
          'text': 'All the features of this App<br/>will be removed from your website.'
        },
        'cant-delete-header': {
          'heading': 'This is Your Header<br/>It Can\'t Be HIdden',
          'text': 'Your header appears on all your pages,<br/>so choose at least one thing to show.'
        },
        'cant-delete-footer': {
          'heading': 'This Is Your Footer<br/>It Can\'t Be Hidden',
          'text': 'Your footer appears on all your pages,<br/>so choose at least one thing to show.'
        },
        'publish-congrats': {
          'heading-first-publish': 'Congrats! Your site has been published',
          'heading': 'Congratulations!',
          'button': 'Done',
          'left': {
            'heading-first-publish': 'We\'ve published your site at this address:',
            'heading': 'Your site is published & live online:',
            'button': 'View Site'
          },
          'right': {
            'heading': 'What\'s Next',
            'subtitle': 'Connect Your Own Branded Domain',
            'text': 'Give your site a more professional look with a domain like: www.mystunningwebsite.com',
            'sale-text': 'Upgrade now and get a free domain <span class=\'-sale-accent\'>+{{text}}% off</span> our most popular premium plans',
            'button': 'Connect Domain'
          },
          'connect-your-own-domain': {
            'button': 'Connect your own domain'
          },
          'three-actions-social': {
            'subtitle': 'Drive traffic to your website'
          },
          'three-actions-promote': {
            'subtitle': 'Promote your website and business'
          },
          'action': {
            'facebook': {
              'description': 'Get more visitors by sharing your site',
              'linkText': 'Share on Facebook',
              'socialText': 'My very own website! Created by me'
            },
            'twitter': {
              'description': 'Tweet your site and build a loyal following',
              'linkText': 'Tweet on Twitter',
              'socialText': 'My very own website! Created by me - made with @Wix',
              'socialHashTags': 'MyProWebsite, StartStunning'
            },
            'shoutout': {
              'description': 'Promote your site with beautiful newsletters',
              'linkText': 'Email a ShoutOut'
            },
            'seowiz': {
              'description': 'Get your website found on Google',
              'linkText': 'Follow Your SEO Plan'
            },
            'email': {
              'description': 'Get an email address at your domain',
              'linkText': 'Get Your Own Mailbox'
            },
            'dashboard': {
              'description': 'Grow your business & get people to your site',
              'linkText': 'Go to Your Wix Home'
            }
          }
        },
        'publish-connect-domain': {
          'heading': 'Connect Your Domain',
          'subtitle': 'Upgrade your site to connect your own customized domain',
          'option1': {
            'text': 'Get a new domain name'
          },
          'option2': {
            'text': 'Connect a domain you already own'
          },
          'button': 'Maybe Later'
        },
        'new-publish-connect-domain': {
          'option1': {
            'text': 'Get a new domain name like <strong>www.{{domain}}</strong>'
          }
        },
        'publish-choose-domain': {
          'heading': 'Choose a domain to publish your site on',
          'subtitle': 'The domain you select will be your site\'s address',
          'option1': {
            'text': 'Use a Free Wix.com domain'
          },
          'option2': {
            'text': 'Connect your own customized domain'
          },
          'button': 'Publish & Continue'
        },
        'publish-failed': {
          'heading': 'That Didn’t Quite Work as Planned',
          'text': 'Try publishing again to get your stunning website live.',
          'accept': 'Publish'
        },
        'time-to-publish': {
          'heading': 'It’s a Great Time to Publish',
          'text': 'Now that you’ve added what you <br/> need to get online, simply click <br/>Publish in the top right corner'
        },
        'autosave': {
          'heading': 'Your Site is Automatically Saved!',
          'text': 'Wix ADI automatically saves your website design, so you don\'t have to.'
        },
        'save-your-site': {
          'heading': 'Save Your Website',
          'text': 'Sign up to Wix.com to save your changes,<br/>and keep going.'
        },
        'fitmode': {
          'heading': 'Section Designs',
          'text': 'Use one of these designs to show a full image.'
        },
        'unfitmode': {
          'heading': 'Choose A New Design',
          'text': 'Select a design that shows a cropped image.'
        },
        'import-page-success': {
          'heading': 'Nice! This Page Was Added',
          'text': 'ADI added this page to your new site.<br/>Go ahead and customize it.'
        },
        'import-page-failed': {
          'heading': 'We’re Unable to Add This Page',
          'text': 'ADI can’t add this page to your site.<br/>Try again later or choose another page.'
        }
      },
      'help': {
        'give-feedback': 'https://docs.google.com/a/wix.com/forms/d/e/1FAIpQLSfjsqvj25HjJANvaarciEGyqSlBsfLzfhpVk17le6hPxIcUTQ/viewform',
        'home': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/e8a37e8c-3172-4636-b914-11724362ce21',
        'businessinfo': {
          'edit': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/ee0dcdfa-f2f1-4448-9c3b-ace3317b65d2'
        },
        'tooltip': {
          'sectionTooltip': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/f79fe6a0-49a2-477b-80af-6d849ef1c954'
        },
        'popup': {
          'newPageAdded': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/fdc89dea-dc99-4a68-85f5-aed0367bffc5',
          'moveSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/06f9d900-c568-4b26-a220-2771802cd86f',
          'deleteSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/5a8e9bc0-0864-47f1-abc6-85a6185197db'
        },
        'pages': {
          'menu': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/8764da11-da73-4b57-adb9-cee9be8d1c4e',
          'mobile': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/90610bac-40c1-4dc2-b8bd-abb94cf71b9a',
          'seo': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a9e484ea-4e67-4d05-8b37-8040087d7d4c',
          'add': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/287e1255-34c8-418a-9a0b-f17b11d28199',
          'page-settings': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a9e484ea-4e67-4d05-8b37-8040087d7d4c'
        },
        'design': {
          'menu': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/d09a17cb-18a1-40aa-b49e-9e37b08403ba',
          'font': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/43b0e22f-7916-4f82-9905-17876c5b2a31',
          'panel-kit': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/1db49cd1-700d-4f72-a400-e61ff7a93236',
          'coloration': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/fe18acc2-2087-483e-bf0f-1c16cf67f360',
          'animations': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/d487d93e-5093-4f83-88cf-3731bd55bf0b',
          'fonts': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/fc38db82-b927-4dc1-9729-d96958756ef7'
        },
        'organizemedia': {
          'singleextvideo': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/9063d60d-f6ed-4c0f-99d1-b9985aeaa4bb',
          'imagegallery': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/5a7fb24b-d999-4017-b337-7efbf5d63c5c'
        },
        'mediagallery': {
          'imagegallery': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/b29e3020-a671-49c9-b8af-43767fae53ad',
          'singleimage': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/ed7428da-e7b2-4399-90df-76fc906c79ef',
          'singleclipart': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/073a29ed-ad50-40db-aa10-72e0187ae0f9',
          'singleshape': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/0a1088b1-9488-4af5-8221-ae73f8802bbb',
          'singlevideo': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/3ec1b885-999d-4ec0-9269-8c0961800f45'
        },
        'mediasettings': {
          'image': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/f6e993e6-b64b-43fa-b103-fd39db251114',
          'clipart': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/e2536465-be1b-4df5-8f13-9fadea234eee',
          'shape': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/7776a3db-c4eb-49c7-9b28-bb452d487f24',
          'bgVideo': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a7147aff-a2da-4f12-87aa-b18b140a9614',
          'extVideo': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a7147aff-a2da-4f12-87aa-b18b140a9614'
        },
        'section': {
          'editSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/5c2f21df-f168-429a-9854-775a45e1f249',
          'editMobileSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/0e672c8a-d881-4d70-b56f-cd109b06a9f4',
          'editListPageSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/307fbba8-2bb4-4c2c-af8e-36ca448f783b',
          'editSlideShow': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/4c375801-504b-49e4-b7fb-9641c58a34fb',
          'editListItem': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/b07cea50-6826-4b12-9d6b-e23cf109e4f3',
          'edit(Contact)': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/9efe4a0c-478f-46b7-a395-e73a9f39aa26',
          'edit(GeneralDescription)': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a355cea5-c7d8-4cc2-94db-5a01a9036b40',
          'edit(Footer)': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/43b8f6ca-bab0-4757-b695-fcbe815d5dc8',
          'edit(Testimonial)': '',
          'edit(TeamMember)': '',
          'sectionMedia': {
            'editSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/d4d6f53a-f587-4bbd-962e-10e239bafba3',
            'editListPageSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/4c5f6517-fd48-4a3d-be10-e532b2b18b44',
            'mediaSettingsPanel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/1df3e92f-b84f-4a29-80b9-d62c57509459',
            'patternsPanel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/9e4ab889-b475-4ea2-906b-1004fce4a14f'
          },
          'add': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/12ac8476-5313-4e7d-a482-74f3a5a100e7',
          'replace': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/2597032c-8945-4d17-877f-088f205def92',
          'colors': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/e5132ef4-36d7-48d4-ac0a-fe5a142e3fc1',
          'animations': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/1c7b6cc2-300c-4b5d-8d27-7eb8e8c3d6df',
          'font': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/7ea7311e-55dc-4a70-9605-44752d3311b5'
        },
        'switch-design': {
          'header': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a6a19742-24a9-40fc-bfee-d335827bb18f',
          'mobile': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/b31c262d-dd90-493a-aad9-60faad07c192'
        },
        'link': {
          'menu': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/bf86bff2-440c-43b4-8a9b-878a889562b7',
          'phone': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/269ee4ca-ac26-40a4-b982-b120e84c75d4'
        },
        'social': {
          'menu': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/9d302210-3a58-4696-b0b4-888d5f79e4dc'
        },
        'tpa': {
          'getsubscribers-learn-more': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/13c63e13-c6ff-466c-9afa-553cdb111252',
          'Blog': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/b5128f77-cf34-47b3-bc05-874aaa1f8243',
          'Bookings': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/d4804362-9575-4bff-bd61-0f0576e30327',
          'Stores': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/26d203b2-c6e2-4719-8f0d-39e409a1db9a',
          'ProGallery': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/68ae0727-b1a6-4279-86c9-af92eb2dd70e',
          'Music': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/0d640609-38ce-495d-8ddb-c633836aa973'
        },
        'publish': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/2abcf51e-0485-40df-8fce-ea6b306b25a0',
        'connectDomain': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/49a67686-f8ca-4198-ae14-8ad7875a4632',
        'app': {
          'panel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/5c451cc1-1e0e-4149-9f8d-480001902f47'
        },
        'members': {
          'signup-settings-panel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/631ca7d1-5162-4bf6-90c5-2142133b005a',
          'terms-of-use': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/6e26476e-30a3-4340-9803-4078fcb2cd7c',
          'privacy-policy': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/af283585-d102-4a93-8e4c-ccbf72aed087',
          'login-panel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/943ee4f8-278d-4af5-9b86-a241acabde14',
          'pages-panel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a0ed50d7-31a4-49e2-a982-6689babaa25b'
        }
      },
      'tip_content': {
        'first-time-mobile-content-panel': 'Show or hide elements by checking or unchecking the circle. Changes you make won\'t affect your site on desktop.',
        'first-time-desktop-content-panel': 'Show or hide elements by checking or unchecking the circle.',
        'section_height': 'Here you can change your section height',
        'contact': {
          'name': 'Rachel',
          'profession': 'Wix Specialist'
        },
        'welcome-tip': {
          'add-mode': {
            'title': 'You’re about to add your Welcome section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you tell people what you or your business does. Be yourself, keep it simple, and show how you’re unique from everyone else. \r\n'
          },
          'edit-mode': {
            'title': 'What does a great Welcome section include?',
            'footer_button': 'Got It',
            'content_template': '✓ Your business name\n✓ Your logo \n✓ Beautiful image\n✓ Impact statement- Let everyone know in a breath what is great about your business. \ne.g., The Most Delicious & Healthy Cupcakes Ever!\n✓ A button so customers can learn more'
          }
        },
        'services-tip': {
          'add-mode': {
            'title': 'You’re about to add your Services section.\n',
            'footer_button': 'Got It',
            'content_template': 'This is where you list your Services.\nPeople want to know you have what they’re looking for. '
          },
          'edit-mode': {
            'title': 'What does a great Services section include?\n',
            'footer_button': 'Got It',
            'content_template': '✓ Name of each Service\n✓ Benefits for your customer\n✓ Your best features\n✓ Information about pricing\n✓ A button so customers can sign up, learn more or get in touch'
          }
        },
        'classes-tip': {
          'add-mode': {
            'title': 'You’re about to add your Classes section.\n',
            'footer_button': 'Got It',
            'content_template': 'This is where you list your Classes. \nPeople want to know you have what they’re looking for. '
          },
          'edit-mode': {
            'title': 'What does a great Classes section include?\n',
            'footer_button': 'Got It',
            'content_template': '✓ Name of each Class\n✓ Benefits for your customer\n✓ Your best features\n✓ Information about pricing\n✓ A button so customers can sign up, learn more or get in touch'
          }
        },
        'practices-tip': {
          'add-mode': {
            'title': 'You’re about to add your Practices section.\n',
            'footer_button': 'Got It',
            'content_template': 'This is where you list your Practices. \nPeople want to know you have what they’re looking for. '
          },
          'edit-mode': {
            'title': 'What does a great Practices section include?\n',
            'footer_button': 'Got It',
            'content_template': '✓ Name of each Practice\n✓ Benefits for your customer\n✓ Your best features\n✓ Information about pricing\n✓ A button so customers can sign up, learn more or get in touch'
          }
        },
        'products-tip': {
          'add-mode': {
            'title': 'You’re about to add your Products section.\r',
            'footer_button': 'Got It',
            'content_template': 'This is where you list the products you offer. People want to know you have what they’re looking for.'
          },
          'edit-mode': {
            'title': 'What does a great Products section include?\r\n',
            'footer_button': 'Got It',
            'content_template': '✓ Name of each product\r\n✓ Beautiful product shots\r\n✓ Benefits for your customer\r\n✓ Your best features\r\n✓ Pricing information\r\n✓ A button so customers can sign up, learn more or get in touch'
          }
        },
        'team-tip': {
          'add-mode': {
            'title': 'You’re about to add your Team section.\r\n',
            'footer_button': 'Got It',
            'content_template': 'This is where you introduce your team. Helping people get to know you and your team is a great way to build trust.'
          },
          'edit-mode': {
            'title': 'What does a great Team section include?\r\n',
            'footer_button': 'Got It',
            'content_template': '✓ Name of each employee and their title\r\n✓ Employee photos\r\n✓ Short descriptions including special honors, awards, degrees or what makes them excellent'
          }
        },
        'testimonial-tip': {
          'add-mode': {
            'title': 'You’re about to add your Testimonial section.\r\n',
            'footer_button': 'Got It',
            'content_template': 'This is where you show people what others are saying about your business. Build credibility with short, honest quotes.'
          },
          'edit-mode': {
            'title': 'What does a great Testimonial section include?\r\n',
            'footer_button': 'Got It',
            'content_template': '✓ Name of each client or customer\r\n✓ Beautiful photo\r\n✓ Short, honest quote'
          }
        },
        'events-tip': {
          'add-mode': {
            'title': 'You’re about to add your Events section.\r\n',
            'footer_button': 'Got It',
            'content_template': 'This is where you promote your upcoming events. Give people a sense of what the event’s about and make them feel like they can’t miss out. \r\n'
          },
          'edit-mode': {
            'title': 'What does a great Events section include?\r',
            'footer_button': 'Got It',
            'content_template': '✓ Event details - including name, date, time & location\r\n✓ Short, engaging description\r\n✓ Beautiful calendar\r\n✓ A button so people can RSVP'
          }
        },
        'contact-tip': {
          'add-mode': {
            'title': 'You’re about to add a Contact section.\n',
            'footer_button': 'Got It',
            'content_template': 'This is where people go to get your contact information. We recommend giving customers a few different ways to reach you. \r'
          },
          'edit-mode': {
            'title': 'What does a great Contact section include?',
            'footer_button': 'Got It',
            'content_template': '✓ Contact details - including email address, phone number & physical address\r\n✓ Contact form \r\n✓ Map'
          }
        },
        'opening hours-tip': {
          'add-mode': {
            'title': 'You’re about to add an Opening Hours section.\r\n',
            'footer_button': 'Got It',
            'content_template': 'Make sure you tell your visitors when you’re open for business. This makes it easier for them to plan their visit and know when to call. \r\n'
          }
        },
        'first_time_hide_field': 'This doesn\'t show on your mobile site right now.<br/>Want it to show? Click it.',
        'subscribe-tip': {
          'add-mode': {
            'title': 'You’re about to add a Subscribe section.\r\n',
            'footer_button': 'Got It',
            'content_template': 'Let visitors sign up to get your email updates. This is an important step in growing your contact list and building strong relationships with your customers.\r\n'
          }
        },
        'features-tip': {
          'add-mode': {
            'title': 'You’re about to add a Features section.\r\n',
            'footer_button': 'Got It',
            'content_template': 'This is where you describe the distinguishing characteristics of your business. Feel free to list as many features as you want - include both the basics and ones that set you apart from the competition.\r\n'
          },
          'edit-mode': {
            'title': 'What does a great Features section include?\r\n',
            'footer_button': 'Got It',
            'content_template': '✓ Name of feature\r\n✓ Benefits for your customer\r\n✓ A button so customers can sign up, learn more or get in touch'
          }
        },
        'about-tip': {
          'add-mode': {
            'title': 'You’re about to add your About section.\n',
            'footer_button': 'Got It',
            'content_template': 'This is where you tell people a little about your business. Give them a behind-the-scenes peek into who you are and how you got started. Feel free to keep it short or go into more detail about your mission, values and philosophy.\r\n'
          },
          'edit-mode': {
            'title': 'What should you include?\r\n',
            'footer_button': 'Got It',
            'content_template': '✓ Your story\r\n✓ Photos of the workplace or team\r\n✓ A button to contact you'
          }
        },
        'faq-tip': {
          'add-mode': {
            'title': 'You’re about to add your FAQ section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you answer your audience’s most frequently asked questions. People want to find answers to their questions as quickly as possible. '
          },
          'edit-mode': {
            'title': 'What does a great FAQ section include?',
            'footer_button': 'Got It',
            'content_template': '✓ A list of 6-10 questions and answers\n✓ Simple layout with easy-to read font, color & size\n✓ A button so people can easily get in touch'
          }
        },
        'resume-tip': {
          'add-mode': {
            'title': 'You’re about to add your Resume section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you show your relevant experience. Keep it concise and double-check for spelling errors.'
          },
          'edit-mode': {
            'title': 'What does a great Resume section include?',
            'footer_button': 'Got It',
            'content_template': '✓ Work experience - include your job title, employers’ names & start-end dates\n✓ Educational background\n✓ Special accomplishments & achievements\n✓ A button so people can easily get in touch'
          }
        },
        'careers-tip': {
          'add-mode': {
            'title': 'You’re about to add your Careers section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you show all your open positions. Potential candidates want to know what job opportunities you have and why it’s such a great place to work.'
          },
          'edit-mode': {
            'title': 'What does a great Careers section include?',
            'footer_button': 'Got It',
            'content_template': '✓ Job position\n✓ Responsibilities & requirements\n✓ A button for candidates to apply'
          }
        },
        'news-tip': {
          'add-mode': {
            'title': 'You’re about to add your News section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you add all your News. Show visitors that you’re a knowledgeable professional - and keep them coming back with interesting & helpful content.'
          },
          'edit-mode': {
            'title': 'What does a great News section include?',
            'footer_button': 'Got It',
            'content_template': '✓ Attention-grabbing title\n✓ Short, catchy description\n✓ A link to read more'
          }
        },
        'tips-tip': {
          'add-mode': {
            'title': 'You’re about to add your Tips section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you add all your Tips. Show visitors that you’re a knowledgeable professional - and keep them coming back with interesting & helpful content.'
          },
          'edit-mode': {
            'title': 'What does a great Tips section include?',
            'footer_button': 'Got It',
            'content_template': '✓ Attention-grabbing title\n✓ Short, catchy description\n✓ A link to read more'
          }
        },
        'resources-tip': {
          'add-mode': {
            'title': 'You’re about to add your Resources section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you add all your Resources. Show visitors that you’re a knowledgeable professional - and keep them coming back with interesting & helpful content.'
          },
          'edit-mode': {
            'title': 'What does a great Resources section include?',
            'footer_button': 'Got It',
            'content_template': '✓ Attention-grabbing title\n✓ Short, catchy description\n✓ A link to read more'
          }
        },
        'articles-tip': {
          'add-mode': {
            'title': 'You’re about to add your Articles section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you add all your Articles. Show visitors that you’re a knowledgeable professional - and keep them coming back with interesting & helpful content.'
          },
          'edit-mode': {
            'title': 'What does a great Articles section include?',
            'footer_button': 'Got It',
            'content_template': '✓ Attention-grabbing title\n✓ Short, catchy description\n✓ A link to read more'
          }
        },
        'volunteer-tip': {
          'add-mode': {
            'title': 'You’re about to add your Volunteer section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you add your volunteer opportunities. People want to know how they can get involved.'
          },
          'edit-mode': {
            'title': 'What does a great Volunteer section include?',
            'footer_button': 'Got It',
            'content_template': '✓ Position\n✓ Short description with relevant information\n✓ A button to get in touch'
          }
        },
        'projects-tip': {
          'add-mode': {
            'title': 'You’re about to add your Projects section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you display the projects you’re proudest of. Show potential clients what you\'re capable of.'
          },
          'edit-mode': {
            'title': 'What does a great Projects section include?\n',
            'footer_button': 'Got It',
            'content_template': '✓ Name of your project\n✓ Beautiful images\n✓ Short description \n✓ A button to learn more'
          }
        },
        'facilities-tip': {
          'add-mode': {
            'title': 'You’re about to add your Facilities section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you tell people about your facilities. People want to know if you have everything they need, so be sure to describe the features and benefits.'
          },
          'edit-mode': {
            'title': 'What does a great Facility section include?',
            'footer_button': 'Got It',
            'content_template': '✓ Facility name\n✓ Short description + opening hours (if relevant)\n✓ Beautiful photos\n✓ Features & benefits\n✓ A button to learn more'
          }
        },
        'special offers-tip': {
          'add-mode': {
            'title': 'You’re about to add your Special Offers section.',
            'footer_button': 'Got It',
            'content_template': 'This is where you tell people about your latest deals. Everyone loves a good sale!'
          },
          'edit-mode': {
            'title': 'What does a great Special Offers section include?',
            'footer_button': 'Got It',
            'content_template': '✓ Special offer name\n✓ Beautiful photos\n✓ Features & Benefits\n✓ A button to learn more'
          }
        }
      },
      'tour': {
        'button': {
          'autoormanual': {
            'title': 'How do you want to do it?'
          },
          'manual': 'Show Me How',
          'automatic': 'Do It For Me',
          'dontlike': 'Try Again',
          'like': 'Keep It',
          'ok': 'OK',
          'done': 'Done',
          'next': 'Next',
          'back': 'Back',
          'continue': 'Continue',
          'gotit': 'Got It',
          'auto': 'Do It For Me',
          'keep-it': 'Keep It',
          'try-another': 'Try Another',
          'keep-them': 'Keep Them'
        },
        'stepmanager': {
          'title': 'What\'s Next'
        },
        'welcome': {
          'step0': {
            'title': 'Hello. I am ADI, Wix\'s Artificial Design Intelligence.',
            'content': 'I was developed to guide you in creating a stunning website just for you. I can create billions of combinations of text, designs, images and more. <br/><br/>Now that I’ve learned who you are, I will use that information to design a website that’s uniquely yours.'
          },
          'step1': {
            'title': 'Help me understand your style.',
            'content': 'Choose the look and feel you like best for your website. It can be changed at any time.'
          },
          'step2': 'Your homepage is the first thing your users will see. Now, I’ll create its initial design section by section. <br/><br/>This may take a few minutes. Follow along to learn how to do it on your own.',
          'step3': 'Opening Add Section panel',
          'step4': 'Choosing section design',
          'step5': {
            'title': 'I’ve completed the first version of your homepage.',
            'content': 'Now, let me show you some basics to creating your website. You can exit or rejoin my tour at any time — just click the circle below.',
            'welcomeonly': {
              'title': 'I’ve completed your homepage',
              'content': 'Now it’s your time to shine. Add a new section, create more pages or upload your own photos - you can do anything you want.'
            }
          }
        },
        'welcome2': {
          'step1000': {
            'title': 'Hello. I am ADI, Wix\'s Artificial Design Intelligence.',
            'content': 'I was developed to guide you in creating a stunning website. I can create billions of combinations of text, images and more. Now that I\'ve learned who you are, I\'ll use that information to design a website that\'s uniquely yours.'
          },
          'step2000': {
            'title': 'Help me learn your taste',
            'content': 'Below are a few designs I\'ve picked specifically for you - there are many more. Choose the one you like the most. And don\'t worry, you can always change it later.',
            'title|abTranslate_1': 'Pick a style you love',
            'content|abTranslate_1': 'Here are a few designs you might like.\nYou can easily change it later.'
          },
          'step3000': {
            'title': '',
            'content': ''
          },
          'step4000': {
            'title': 'Now I\'m Going to Create Your Homepage',
            'content': 'Let me take over for a few moments and I’ll create the initial design<br/>of your stunning homepage right before your eyes.',
            'button': 'Create My Homepage',
            'title|abTranslate_1': 'Wix ADI will now create your website',
            'content|abTranslate_1': 'Wix ADI has gathered your info and prepared your design.<br/>Now, from billions of combinations including text, images and more,<br/>you’re about to get a website that’s uniquely yours.',
            'button|abTranslate_1': 'Create My Website'
          },
          'preparing': {
            'button': 'Preparing...'
          },
          'complete': {
            'title': 'Here it is, the first version of your website!',
            'full-site-title': 'Here it is, the first version of your website!',
            'content': 'Keep going - ADI will show you how to create the rest of your website. Click the circle below to exit or rejoin the tour at any time.',
            'title|abTranslate_1': 'Here it is, the first version of your website!',
            'content|abTranslate_1': 'Start exploring your website. You can change anything you want - the Wix ADI Assistant will show you how.',
            'content|abTranslate_1|custom': 'Start exploring your website. You can change anything you want - the Wix ADI Assistant will show you how.'
          },
          'complete3': {
            'title': 'Let’s customize your website',
            'full-site-title': 'Let’s customize your website',
            'content': 'ADI will guide you every step of the way.<br/>Click the circle below anytime to see <br/>what’s next and get tips for your site.'
          },
          'edit-site': {
            'title': 'You’re in Preview Mode<br/><br/> To customize your colors, <br/>images and more, click Edit Site.'
          },
          'preview-site': {
            'title': 'You’re in Preview Mode<br/>To customize the layout, colors,</br>images and more, click Edit Site.'
          }
        },
        'logoExtraction': {
          'step3000': {
            'title': 'Want to create a color palette<br/>from your logo?',
            'content': 'Wix ADI can use colors from your logo<br>to create a palette just for you.',
            'skip': 'Skip',
            'button': 'Create Palette',
            'title|abTranslate_1': 'Want your site’s colors<br/>to match your logo?',
            'content|abTranslate_1': 'Wix ADI can pull colors from your logo to create a color palette just for you.',
            'title|abTranslate_1|custom': 'Want your site’s colors<br/>to match your logo?',
            'content|abTranslate_1|custom': 'Wix ADI can pull colors from your logo to create a color palette just for you.'
          },
          'step3100': {
            'title': 'Creating your color palette…',
            'content': 'Creating palette'
          },
          'step3200': {
            'title': 'Here’s a unique color palette for your website',
            'newPaletteFromLogo': {
              'title': 'Here’s a unique color palette for your website',
              'content': 'You can easily change it later.'
            },
            'content': 'You can easily change it later.',
            'skip': 'Skip',
            'button': 'Use These Colors',
            'title|abTranslate_1': 'Here’s a unique color palette for your website',
            'content|abTranslate_1': 'You’ll be able to change it later',
            'skip|abTranslate_1': 'Don’t Use',
            'content|abTranslate_1|custom': 'You’ll be able to change it later.'
          }
        },
        'preview': {
          'step0': 'Click Preview to see how your site looks to visitors on desktop and mobile.'
        },
        'business-details-changed-task': {
          'btn': 'View Text',
          'manual': '<b>Congrats on your new site!</b><br/><br/>Find and use custom text from ADI on your site.'
        },
        'entire-website-design': {
          'manual-or-auto': 'You’ve chosen to change the design of your website. ADI can choose a new theme for you, or show you how to do it.',
          'auto': {
            'step0': 'Opening Design Menu',
            'step0b': 'Opening Design Menu',
            'step0c': 'Opening Themes',
            'step1': 'Choosing a Theme'
          },
          'manual': {
            'step0': 'Click Site Design',
            'step0c': 'Click Themes',
            'step1': 'Choose a Design Theme'
          },
          'step2': 'What do you think of this design?'
        },
        'colors': {
          'manual-or-auto': 'Let\'s switch up your website\'s colors.',
          'auto': {
            'step0': 'Opening Design Menu',
            'step1': 'Customizing the colors of your design theme.',
            'step2': 'Opening Palette',
            'step3': 'Choosing Palette',
            'step4': 'What do you think of the new set of colors?'
          },
          'manual': {
            'step0': 'Click Site Design',
            'step1': 'Click here to customize the colors of your design.',
            'step2': 'Click to open Palettes',
            'step3': 'Choose a Palette',
            'step4': 'What do you think of the new set of colors?'
          }
        },
        'coloration': {
          'step0': 'Click Site Design',
          'step0b': 'Opening Design Menu',
          'step0c': 'Click Colors',
          'step1': 'Click Customize Design',
          'step2': 'Click to Edit',
          'step3': 'ADI chose these colors for you. They’re in use across your site.',
          'step4': 'To change your site colors, choose a palette ADI recommends for you or pick a new main color.',
          'step5': 'Do you like your website\'s colors?',
          'try-another': 'No, Change Them',
          'keep-it': 'Yes, Use Them'
        },
        'fonts': {
          'new-font': {
            'manual-or-auto': 'Let’s switch up your website’s fonts. ADI can choose a new font set for you, or show you how to do it.'
          },
          'auto': {
            'step0': 'Opening Design Menu',
            'step1': 'Customizing the fonts of your design theme.',
            'step1b': 'Opening Fonts Panel',
            'step3': 'Choosing Font Set'
          },
          'manual': {
            'step0': 'Click Site Design',
            'step1': 'Click here to customize the fonts of your design.',
            'step1b': 'Click Fonts',
            'step2': 'Click to open Font Sets',
            'step3': 'Choose a Font Set',
            'font-size': {
              'step4': 'What do you think of this font size?'
            },
            'font-set': {
              'step4': 'What do you think of this font set?'
            }
          }
        },
        'change-layout': {
          'manual-or-auto': 'ADI can choose a new design for this section, or show you how to do it.',
          'step0': 'Now I\'ll show you how to change a section\'s design.',
          'step2': 'Choose a page',
          'auto': {
            'step0': 'Pick the section you want to change and ADI will choose a new design.',
            'step1': 'Opening Section Designs',
            'step2': 'Choosing a new section design',
            'step3': 'What do you think of this section\'s new design?'
          },
          'manual': {
            'step1': 'Choose a page',
            'step2': 'Click the section you want to change and ADI will show you new design options.',
            'step3': 'To see all your options, click Designs',
            'step4': 'Select a design you love',
            'step5': 'What do you think of this section\'s new design?'
          }
        },
        'edit-content': {
          'step0': 'Now I\'ll show you how to edit your content.',
          'step1': 'Choose a page',
          'step2': 'Select a section to edit its content',
          'step3': 'Click Edit',
          'step4': 'Edit your content here and I’ll update the changes in your website. You can hide or show text with one click.'
        },
        'when-done': 'When you\'re done, click below.',
        'when-done2': 'When you\'re done, go back to edit your site.',
        'add-section': {
          'step0': 'Now I\'ll show you how to add a section.',
          'step1': 'Choose a page',
          'step2': 'Click Add Section',
          'step3': 'I’ve listed possible sections by relevance for your type of business. Choose the section and design you want and drag it to your website.',
          'step4': 'When you\'re done, click below.'
        },
        'add-section2': {
          'step2': 'Click Section to Page'
        },
        'add-new-page': {
          'step0': 'Click the Page Manager here. Use it to navigate between pages at any time.',
          'step1': 'Click Add Page',
          'step2': 'I’ve arranged all possible pages by relevance for your type of business. Choose the page you want, click a design and I\'ll add it to your website.'
        },
        'add-new-page2': {
          'step1': 'Click Page'
        },
        'publish': {
          'step0': 'Click Publish so visitors can see your website online.',
          'step1': 'Choose a free Wix domain or connect your own. But don\'t stop now — keep creating your stunning website.'
        },
        'connect-domain': {
          'step0': 'Look professional with a memorable, customized domain. To get yours now or connect a domain you already own, click here.'
        },
        'page-seo': {
          'step0': 'Open the Page Manager',
          'step1': 'Choose the page you want to work on.',
          'step2': 'Click Page Settings',
          'step3': 'Select Page SEO',
          'step4': 'Good SEO helps people find you on search engines like Google. Choose relevant keywords including your business name, location and services.',
          'step5': 'When you\'re done, click below.'
        },
        'wiz-seo': {
          'change-business-details': 'Click To Change Your Site Business type',
          'click-get-found': 'Click Get Found on Google'
        },
        'import-images': {
          'step0': 'Click Edit & Replace',
          'step1': 'Click Replace'
        },
        'import-content': {
          'label': 'All the text ADI imported is here. Click "{{textManagerLabel}}" to see all your options.'
        },
        'import-content-forbusiness-details-changed': {
          'label': 'Click View More Text to see all the options ADI has selected for your site.'
        },
        'animation': {
          'step0': 'Click Site Design',
          'step0b': 'Opening Design Menu',
          'step1': 'Click Customize Design',
          'step1b': 'Click Animation',
          'step2': 'ADI can automatically animate your website. Choose an animation style from the dropdown.',
          'step2-1': 'Click Edit',
          'step2-2': 'ADI can automatically animate your website. Choose an animation style.',
          'step3': 'Preview your animation to see if you like it',
          'step4': 'Like this animation? Scroll your site to see more.',
          'step5': 'Here is your site without animation. Do you want to try another or keep it?'
        },
        'newFonts': {
          'manual': {
            'step3': 'Choose a new font set, or customize the size of your selected font set by dragging the slider.'
          }
        },
        'customize-section-design': {
          'step0': 'Click the section you want to customize<br/>and ADI will show you how.',
          'step1': 'Click here to enter design options',
          'step2': 'Click Customize Design',
          'step3': 'Choose what you want to customize',
          'step4': 'When you’re done customizing, click below'
        }
      },
      'seo_panel': {
        'description': {
          'placeholder': 'What makes this page unique? Describe your business and the content on your site...',
          'validation': 'Description length must be 320 characters at most (including white spaces)'
        },
        'keywords': {
          'placeholder': 'Add keywords separated by commas',
          'launch': {
            'note': 'Google doesn’t use these keywords, but other search engines may.',
            'title': 'Get Found on Google',
            'description': 'Boost your site’s SEO with Wix SEO Wiz. Head to your step-by-step plan now.',
            'button': 'Let\'s Go'
          },
          'validation': 'Can only accept up to 10 keywords and 250 characters at most (including white spaces)'
        },
        'search_results': {
          'placeholder': 'Hide this page from search results'
        },
        'title': {
          'validation': 'Title length must be 70 characters at most (including white spaces)'
        },
        'url': {
          'validation': 'Page URL should be 1 character or more with no special characters (%,&,# etc.)'
        }
      },
      'business_card': {
        'title': 'Take a moment to edit your info',
        'email': {
          'placeholder': 'Enter your email'
        },
        'website_address': {
          'placeholder': 'e.g., www.yoursite.com'
        },
        'phone': {
          'placeholder': 'Enter your phone number',
          'label': 'PHONE'
        },
        'address': {
          'placeholder': 'Enter your address',
          'label': 'ADDRESS'
        },
        'fax': {
          'placeholder': 'Enter your fax number',
          'label': 'FAX'
        },
        'name': {
          'placeholder': 'Enter your name',
          'label': 'NAME'
        },
        'social': {
          'placeholder': 'Paste social link'
        },
        'contact-email': {
          'label': 'CONTACT EMAIL'
        },
        'social-media': {
          'label': 'SOCIAL MEDIA'
        },
        'add-social-network': {
          'label': 'ADD A SOCIAL NETWORK'
        },
        'website': {
          'label': 'EXISTING WEBSITE'
        },
        'title|abTranslate_1': 'Review and edit your info'
      },
      'design': {
        'kit': {
          'title': {
            'suffix': 'Kit'
          },
          'reset': {
            'button': 'Reset'
          },
          'font': {
            'title': 'Font Set',
            'edit': 'Edit'
          },
          'customize-design': 'Customize Design',
          'customize': 'Customize',
          'type': {
            'bold-2': 'Bold 2',
            'jet-black': 'Jet Black',
            'innovative': 'Innovative',
            'rustic': 'Rustic',
            'smart': 'Smart',
            'delight': 'Delight',
            'timeless': 'Timeless',
            'vogue': 'Vogue',
            'evolution': 'Evolution',
            'midnight': 'Midnight',
            'classic': 'Classic',
            'bounce': 'Bounce',
            'deep-forest': 'Deep Forest',
            'bouquet': 'Bouquet',
            'intensity': 'Intensity',
            'merlot': 'Merlot',
            'soho': 'Soho',
            'hi-rise': 'Hi Rise',
            'horizon': 'Horizon',
            'sophisticated': 'Sophisticated',
            'skyscraper': 'Skyscraper',
            'indulge': 'Indulge',
            'agile': 'Agile',
            'fuse': 'Fuse',
            'charming': 'Charming',
            'sugar': 'Sugar',
            'clean': 'Clean',
            'rosewater': 'Rosewater',
            'playground': 'Playground',
            'fresh': 'Fresh',
            'upbeat': 'Upbeat',
            'breeze': 'Breeze',
            'spark': 'Spark',
            'bold': 'Bold',
            'minimal': 'Minimal',
            'chic': 'Chic',
            'maison': 'Maison',
            'vintage': 'Vintage',
            'elegant': 'Elegant',
            'cadenza': 'Cadenza',
            'serene': 'Serene',
            'black-ice': 'Black Ice',
            'unplugged': 'Unplugged',
            'chic-2': 'Chic 2',
            'black-ice 2': 'Black Ice 2',
            'cadenza-2': 'Cadenza 2',
            'delight-2': 'Delight 2',
            'horizon-2': 'Horizon 2',
            'fun': 'Fun',
            'playground-2': 'Playground 2',
            'clean-2': 'Clean 2',
            'sugar-2': 'Sugar 2',
            'fresh-2': 'Fresh 2',
            'breeze-2': 'Breeze 2',
            'sincere': 'Sincere',
            'funky': 'Funky',
            'army': 'Army',
            'royal': 'Royal',
            'organic': 'Organic',
            'tender': 'Tender',
            'dynamic': 'Dynamic',
            'pure': 'Pure',
            'rosewater-new': 'Rosewater New',
            'fuse-new': 'Fuse New',
            'sophisticated-new': 'Sophisticated New',
            'intensity-new': 'Intensity New',
            'agency': 'Agency',
            'grand': 'Grand',
            'hype': 'Hype',
            'indie': 'Indie',
            'inspire': 'Inspire',
            'lovely': 'Lovely',
            'lush': 'Lush',
            'luxury': 'Luxury',
            'play': 'Play',
            'retro': 'Retro',
            'sky-high': 'Sky High',
            'vivid': 'Vivid',
            'wild-rose': 'Wild Rose'
          }
        },
        'coloration': {
          'generic': {
            'main': 'main',
            'secondary': 'secondary',
            'third': 'third',
            'fourth': 'fourth',
            'light': 'light',
            'dark': 'dark'
          },
          'palette': {
            'title': 'Color Palette',
            'edit': 'Edit'
          },
          'coloration-mode-selector': {
            'dropdown': {
              'light-mode': 'Light Mode',
              'dark-mode': 'Dark Mode'
            },
            'title': 'Color Palette Mode'
          },
          'customize-palette': {
            'title': '{{ colorTypeName }} color'
          },
          'basic': {
            'panelheader': 'Site Colors',
            'palettetitle': 'Main Color',
            'logoPalette': {
              'title': 'Logo Palette'
            },
            'palettes': {
              'title': 'Recommended Palettes'
            },
            'hex-value': 'HEX VALUE',
            'advanced': 'Advanced Editing',
            'change-palette-colors': 'Edit Palette Colors',
            'loader': {
              'text': 'Creating your palettes...'
            },
            'panelheadernew': 'Site Colors'
          },
          'color-mode-selector-new': {
            'mode-title': 'Color Mode',
            'button-edit': 'Edit',
            'dialog': {
              'title': 'Color Settings',
              'mode-title': 'Mode',
              'coloration-level-title': 'Coloration Level',
              'coloration-mode': {
                'radio-buttons': {
                  'light': 'Light',
                  'mix': 'Mix',
                  'dark': 'Dark'
                }
              },
              'coloration-level': {
                'drop-down': {
                  'plain': 'Plain',
                  'tinted': 'Tinted',
                  'colorful': 'Colorful',
                  'vibrant': 'Vibrant'
                }
              }
            }
          },
          'advanced': {
            'panelheader': 'PALETTE COLORS',
            'title': 'Edit Your Palette',
            'reset': 'Reset',
            'description': 'Choose colors to use across your site. Then make sure text is easy to read.',
            'readability': {
              'positive': 'Your text is easy to read',
              'negative': 'Text is hard to read',
              'learn': {
                'more': 'Learn more'
              },
              'fix': 'Adjust Colors',
              'loader': 'Fixing Palette Colors'
            },
            'main': {
              'color': 'MAIN COLOR'
            },
            'secondary': {
              'color': 'SECONDARY COLOR'
            },
            'third': {
              'color': 'THIRD COLOR'
            },
            'fourth': {
              'color': 'FOURTH COLOR'
            },
            'light': {
              'color': 'LIGHT COLOR'
            },
            'dark': {
              'color': 'DARK COLOR'
            }
          },
          'palettecolordialog': {
            'paragrpah': 'To ensure your site’s readability, choose a {{colorType}} color.'
          }
        },
        'themes': {
          'title': 'Themes'
        },
        'colors': {
          'title': 'Colors'
        },
        'fonts': {
          'title': 'Fonts',
          'font-size': {
            'label': 'Size: {{ sizeLabel }}'
          },
          'font-size-': {
            '0': 'Medium',
            '1': 'Large',
            '2': 'Extra Large',
            '3': 'Huge',
            '-3': 'Tiny',
            '-2': 'Extra Small',
            '-1': 'Small'
          },
          'section-panel-title': 'Font Size',
          'text-alignment': {
            'label': 'Alignment',
            'left': 'Left',
            'center': 'Center',
            'right': 'Right'
          },
          'paragraph-columns': {
            'split': 'Split',
            'merge': 'Merge'
          },
          'split-parapraph': {
            'title': 'Paragraph Columns',
            'split': 'Columns ',
            'merge': 'Merged Text'
          },
          'position-on-media': 'Position',
          'section-panel-title-alignment': 'Text Settings',
          'panel-title': 'Site Fonts',
          'size-notice': 'Font Set Size',
          'site-tip': 'Choose a font set for your titles and text. Use the slider to adjust the size.',
          'section-tip': 'Choose a font size to apply to the selected section.<br />Go to <a ng-click=\'$ctrl.goToFontsPanel()\' data-hook="goto-fonts-panel">Site Fonts</a> to change your site\'s font set.',
          'section-tip-alignment': 'Choose section font size and text alignment.<br />Go to <a ng-click=\'$ctrl.goToFontsPanel()\' data-hook="goto-fonts-panel">Site Fonts</a> to change your site\'s font set.'
        },
        'font-data': {
          'agile': {
            'name': 'Agile',
            'description': 'Vivacious and swift with a dash of spontaneity'
          },
          'army': {
            'name': 'Army',
            'description': 'A commanding presence, both strong and tenacious'
          },
          'black-ice': {
            'name': 'Black Ice',
            'description': 'Compelling and intense with a magnetic nature'
          },
          'black-ice-2': {
            'name': 'Black Ice 2',
            'description': 'Compelling and intense with a magnetic nature'
          },
          'bold': {
            'name': 'Bold',
            'description': 'An adventurous spirit that\'s loud and proud'
          },
          'bold-2': {
            'name': 'Bold 2',
            'description': 'An adventurous spirit that\'s loud and proud'
          },
          'bounce': {
            'name': 'Bounce',
            'description': 'A burst of kinetic energy, bright and animated'
          },
          'bouquet': {
            'name': 'Bouquet',
            'description': 'Lovely and inviting with a celebratory feel'
          },
          'breeze': {
            'name': 'Breeze',
            'description': 'A gust of cool air along the beach, brisk and refreshing'
          },
          'breeze-2': {
            'name': 'Breeze 2',
            'description': 'A gust of cool mountain air, brisk and refreshing'
          },
          'cadenza': {
            'name': 'Cadenza',
            'description': 'Intense yet harmonious, like the sound of a powerful symphony'
          },
          'cadenza-2': {
            'name': 'Cadenza 2',
            'description': 'Intense yet harmonious, like the sound of a powerful symphony'
          },
          'charming': {
            'name': 'Charming',
            'description': 'A charismatic character, both dashing and suave'
          },
          'chic': {
            'name': 'Chic',
            'description': 'Effortless style and poise with a hint of glamour'
          },
          'chic-2': {
            'name': 'Chic 2',
            'description': 'Effortless style and poise with a hint of glamour'
          },
          'classic': {
            'name': 'Classic',
            'description': 'A graceful nature, truly tasteful and polished'
          },
          'clean': {
            'name': 'Clean',
            'description': 'Neat and balanced, like a perfectly blank slate'
          },
          'clean-2': {
            'name': 'Clean 2',
            'description': 'Neat and balanced, like a perfectly blank slate'
          },
          'deep-forest': {
            'name': 'Deep Forest',
            'description': 'A woodsy, free spirited vibe that\'s intriguing and pleasant'
          },
          'delight': {
            'name': 'Delight',
            'description': 'Engaging and joyful with a spark of jubilation'
          },
          'delight-2': {
            'name': 'Delight 2',
            'description': 'Engaging and joyful with a spark of jubilation'
          },
          'dynamic': {
            'name': 'Dynamic',
            'description': 'A thrill-seeking quality, energetic and audacious'
          },
          'elegant': {
            'name': 'Elegant',
            'description': 'A beauty that never fades, both upscale and exquisite'
          },
          'evolution': {
            'name': 'Evolution',
            'description': 'Visionary and progressive with a contemporary touch'
          },
          'fresh': {
            'name': 'Fresh',
            'description': 'Like freshly cut grass on a summer day, crisp and invigorating'
          },
          'fresh-2': {
            'name': 'Fresh 2',
            'description': 'Like freshly cut grass on a summer day, crisp and invigorating'
          },
          'fun': {
            'name': 'Fun',
            'description': 'Bold, bright and buzzing with an upbeat tone'
          },
          'funky': {
            'name': 'Funky',
            'description': 'An out-of-the-box vibe, uniquely hip and colorful'
          },
          'fuse': {
            'name': 'Fuse',
            'description': 'Deliberate and strong with unwavering focus'
          },
          'hi-rise': {
            'name': 'Hi Rise',
            'description': 'Established and professional, a highly approachable feel'
          },
          'horizon': {
            'name': 'Horizon',
            'description': 'Simple yet stunning, like a sunset over the ocean'
          },
          'horizon-2': {
            'name': 'Horizon 2',
            'description': 'Simple yet stunning, like a sunset over the ocean'
          },
          'indulge': {
            'name': 'Indulge',
            'description': 'Luxuriously classy while exuding an air of gentle refinement'
          },
          'innovative': {
            'name': 'Innovative',
            'description': 'Creative and modern with a spark of cutting-edge discovery'
          },
          'intensity': {
            'name': 'Intensity',
            'description': 'A fierce vibe with electric energy and determination'
          },
          'jet-black': {
            'name': 'Jet black',
            'description': 'A serious tone, sleek and striking with a dash of resilience'
          },
          'maison': {
            'name': 'Maison',
            'description': 'Like a grand estate in the French countryside, elegant and fine'
          },
          'merlot': {
            'name': 'Merlot',
            'description': 'Rich, tasteful and full-bodied, like a fine red wine'
          },
          'midnight': {
            'name': 'Midnight',
            'description': 'An unsolved mystery, both vivid and captivating'
          },
          'minimal': {
            'name': 'Minimal',
            'description': 'Balance and simplicity with a touch of refinement'
          },
          'organic': {
            'name': 'Organic',
            'description': 'A cheerful nature, authentic and friendly'
          },
          'playground': {
            'name': 'Playground',
            'description': 'Youthful and lighthearted with a sense of pure joy'
          },
          'playground-2': {
            'name': 'Playground 2',
            'description': 'Youthful and lighthearted with a sense of pure joy'
          },
          'pure': {
            'name': 'Pure',
            'description': 'Wholesome, natural and kind with a genuine quality'
          },
          'rosewater': {
            'name': 'Rosewater',
            'description': 'Enchanting, delicate and just the right touch of romance'
          },
          'royal': {
            'name': 'Royal',
            'description': 'An air of aristocratic dignity and a modern, confident feel'
          },
          'rustic': {
            'name': 'Rustic',
            'description': 'Simple country charm garnished with an urban twist'
          },
          'serene': {
            'name': 'Serene',
            'description': 'A light, tranquil tone that\'s pleasant and relaxed'
          },
          'sincere': {
            'name': 'Sincere',
            'description': 'Cool and candid with an earnest approach'
          },
          'skyscraper': {
            'name': 'Skyscraper',
            'description': 'Cosmopolitan style with an influential, modern feel'
          },
          'smart': {
            'name': 'Smart',
            'description': 'Professional and intelligent, with a look that\'s easy on the eyes'
          },
          'soho': {
            'name': 'Soho',
            'description': 'Contemporary taste with a touch of downtown class'
          },
          'sophisticated': {
            'name': 'Sophisticated',
            'description': 'A seasoned world traveler, refined and cultured'
          },
          'spark': {
            'name': 'Spark',
            'description': 'Sharp and inspired with a flicker of excitement'
          },
          'sugar': {
            'name': 'Sugar',
            'description': 'Sweet and lively with a hint of spice and everything nice'
          },
          'sugar-2': {
            'name': 'Sugar 2',
            'description': 'Sweet and lively with a hint of spice and everything nice'
          },
          'tender': {
            'name': 'Tender',
            'description': 'Soft and gentle with a warm, welcoming character'
          },
          'timeless': {
            'name': 'Timeless',
            'description': 'An enduring, ageless look that never goes out of style'
          },
          'unplugged': {
            'name': 'Unplugged',
            'description': 'An edgy vibe, raw and exposed'
          },
          'upbeat': {
            'name': 'Upbeat',
            'description': 'Bright and optimistic with a captivating energy'
          },
          'vintage': {
            'name': 'Vintage',
            'description': 'A retro tone, like a valuable antique that\'s been renewed'
          },
          'vogue': {
            'name': 'Vogue',
            'description': 'Striking glamour with a touch of je ne sais quoi'
          },
          'retro': {
            'name': 'Retro',
            'description': 'A vintage feel, like a valuable antique that\'s been renewed'
          },
          'lovely': {
            'name': 'Lovely',
            'description': 'Charming and soft with a welcoming character'
          },
          'sky-high': {
            'name': 'Sky High',
            'description': 'Cosmopolitan style with an influential, modern feel'
          },
          'grand': {
            'name': 'Grand',
            'description': 'Like an opulent estate in the French countryside, elegant and fine'
          },
          'hype': {
            'name': 'Hype',
            'description': 'Compelling and intense with a magnetic nature'
          },
          'wild-rose': {
            'name': 'Wild Rose',
            'description': 'Enchanting, delicate and just the right touch of intrigue'
          },
          'indie': {
            'name': 'Indie',
            'description': 'Freely wild and unplugged with an understated quality'
          },
          'lush': {
            'name': 'Lush',
            'description': 'Rich, tasteful and full-bodied, like a fine red wine'
          },
          'vivid': {
            'name': 'Vivid',
            'description': 'Intense yet harmonious, like the sound of a powerful symphony'
          },
          'play': {
            'name': 'Play',
            'description': 'Bold, bright and buzzing with an upbeat tone'
          },
          'luxury': {
            'name': 'Luxury',
            'description': 'Dignified class with an air of grace and grandeur'
          },
          'inspire': {
            'name': 'Inspire',
            'description': 'Influential and empowering with a welcoming charisma'
          },
          'agency': {
            'name': 'Agency',
            'description': 'Smart and professional with a distinct sense of confidence'
          }
        },
        'animations': {
          'title': 'Animation',
          'section-panel-title': 'Section Animation',
          'panel-title': 'Site Animation',
          'component-animation': {
            'title': 'Animation type'
          },
          'page-transition': {
            'title': 'Page transition'
          },
          'scroll-type': {
            'title': 'Scroll effect'
          },
          'section-tip': 'Choose an animation to apply to the selected section.<br />Go to <a ng-click=\'$ctrl.goToAnimationPanel()\' data-hook="goto-animation-panel">Site Animation</a> to change your site\'s animation.',
          'slideshow-animation': {
            'title': 'TRANSITION EFFECTS'
          },
          'slideshow-transition-time': {
            'label': 'SLIDE DURATION: {{ transitionTime }} SEC'
          },
          'preview': 'Animate your slideshow with transition effects.<br />Choose one, then <a ng-click="$ctrl.goToPreview()" data-hook="goto-preview">Preview</a> your site to see it.'
        },
        'header': {
          'logo-size': {
            'label': 'Size: {{ sizeLabel }}'
          },
          'logo-size-': {
            '0': 'Medium',
            '1': 'Large',
            '2': 'Extra Large',
            '-2': 'Extra Small',
            '-1': 'Small'
          },
          'type': {
            'title': 'Header Type',
            'solid': 'Regular',
            'transparent': 'Transparent',
            'easter-egg-url': 'https://www.youtube.com/embed/Qkuu0Lwb5EM?rel=0&autoplay=1&showinfo=0',
            'fixed': 'Fixed'
          },
          'bgcolor': {
            'title': 'Background Color',
            'description': 'Choose a background color for your {{ sitePart }}.<br/>For more options go to <a ng-click="$ctrl.goToColorationPanel()" class="go-to-site-color" data-hook="goto-site-colors">Site Colors</a>.',
            'transparent': 'The header is transparent in the homepage.<br/>Choose a color for the inner pages.'
          }
        }
      },
      'editor': {
        'catalog-styles': {
          'buttons': {
            'title': 'Button Style',
            'description': 'Pick a design you like'
          }
        },
        'media-settings': {
          'title': 'Media Settings',
          'media-type': 'Media Type',
          'media-size': {
            'label': 'Media Layout'
          },
          'media-opacity': {
            'label': 'Image Opacity'
          },
          'media-background': {
            'label': 'Color Behind Image'
          },
          'types': {
            'image': 'Image',
            'video': 'Video',
            'gallery': 'Gallery',
            'pattern': 'Pattern',
            'shape': 'Shape'
          },
          'gallery': {
            'organize-media': 'Organize Media',
            'change-color': 'Color'
          },
          'gallery-name': {
            'slideshow': 'Slideshow',
            'grid6': '6 Column Grid',
            'grid4': '4 Column Grid',
            'grid3': '3 Column Grid',
            'grid2': '2 Column Grid',
            'animatedgrid3': 'Animated Grid',
            'collage': 'Collage',
            'slider': 'Slider',
            'thumbnails': 'Thumbnail Slideshow',
            'masonry': 'Masonry',
            'accordion': 'Accordion Slider',
            'fullwidthcollage': 'Full Width Collage',
            'stripslideshow': 'Full Width Slideshow',
            'stripshowcase': 'Full Width Showcase',
            'stripaccordion': 'Full Width Accordion Slider',
            'stripmasonry': 'Full Width Masonry',
            'fullwidthcollage_b': '4 Column Full Width Collage',
            'fullwidthcollage_c': '3 Column Full Width Collage'
          },
          'ext-video': {
            'video-url': {
              'label': 'video url',
              'placeholder': 'Set link to your video'
            },
            'autoplay': {
              'label': 'Autoplay on loading'
            },
            'loop': {
              'label': 'Play in loop'
            },
            'controls': {
              'label': 'Show video controls',
              'option': {
                'never': 'Never',
                'on-hover': 'On Hover',
                'always': 'Always'
              }
            }
          },
          'ms-options': {
            'box': 'Box',
            'cropped': 'Crop',
            'croppedheader': 'Boxed Header',
            'uncropped': 'Full Image',
            'strip': 'Strip',
            'stripheader': 'Header Strip',
            'column': 'Column',
            'background': 'Background',
            'backgroundfull': 'Full Background',
            'backgroundlist': 'List Background',
            'backgroundheader': 'Header Background',
            'gallery': {
              'all': {
                'button': 'Change Gallery'
              }
            },
            'image': {
              'cropped': {
                'button': 'Crop'
              },
              'croppedheader': {
                'button': 'Crop'
              },
              'uncropped': {
                'button': 'Designs'
              },
              'strip': {
                'button': 'Position'
              },
              'stripheader': {
                'button': 'Position'
              },
              'column': {
                'button': 'Position'
              },
              'background': {
                'button': 'Position'
              },
              'backgroundfull': {
                'button': 'Position'
              },
              'backgroundlist': {
                'button': 'Position'
              },
              'backgroundheader': {
                'button': 'Position'
              }
            }
          },
          'for-more-layouts': 'For more layout options, go to <a ng-click="$ctrl.goToSwitchPreset()" adi-automation="more-layouts-switch-preset" data-hook="goto-switch-preset">Designs</a>',
          'logo': {
            'image': 'Logo Image',
            'shape': 'Logo Shape'
          },
          'tabs': {
            'image': 'Image',
            'gallery': 'Gallery',
            'video': 'Video',
            'pattern': 'Pattern',
            'shape': 'Shape'
          },
          'title-label': 'title (alt text)',
          'title-placeholder': 'Add your title here',
          'description-label': 'description',
          'description-placeholder': 'Describe your image',
          'link-label': 'link',
          'button-replace': 'Replace',
          'button-search': 'Search',
          'image-settings': {
            'title': 'Image Settings'
          },
          'video-settings': {
            'title': 'Video Settings'
          },
          'ext-video-settings': {
            'title': 'Video Settings'
          },
          'shape-settings': {
            'title': 'Shape Settings'
          },
          'clipart-settings': {
            'title': 'Clipart Settings'
          },
          'image-position': {
            'title': 'image position'
          },
          'media-title': {
            'title': 'title (alt text)'
          },
          'description': {
            'title': 'description'
          },
          'video-url': {
            'title': 'video url'
          },
          'autoplay': {
            'title': 'Autoplay on loading'
          },
          'loop': {
            'title': 'Play in loop'
          },
          'show-video-controls': {
            'title': 'Show video controls'
          },
          'image-upscale-message': {
            'fix-title': 'Heads up! The resolution of this image is low. Enhance it now.',
            'fix-btn': 'Enhance',
            'revert-title': 'This image is enhanced',
            'revert-btn': 'Change'
          }
        }
      },
      'members-area': {
        'open-signup-settings-panel': {
          'label': 'Member Signup Settings'
        },
        'signup-settings-panel': {
          'title': 'Member Signup Settings',
          'description': 'Choose who can become a member of your site.<br>Note: these options apply to your Member\'s Area only.',
          'who-can-be-member': {
            'label': 'Who can be a member?',
            'option': {
              'everyone': 'Everyone',
              'approved': 'People I Approve'
            }
          },
          'which-option-show-first': {
            'label': 'Which option shows first?',
            'option': {
              'signup': 'New Member Signup',
              'login': 'Existing Member Login'
            }
          },
          'allow-social-login': {
            'label': 'Allow social login',
            'option': {
              'google': 'Google',
              'facebook': 'Facebook'
            }
          },
          'termsOfUse': {
            'label': 'Terms of use page',
            'page-name': 'Terms of Use'
          },
          'codeOfConduct': {
            'label': 'Code of conduct page',
            'page-name': 'Code of Conduct'
          },
          'privacyPolicy': {
            'label': 'Privacy policy page',
            'page-name': 'Privacy Policy'
          }
        },
        'edit-field': {
          'button-label': 'Edit'
        },
        'login-bar-panel': {
          'title': 'Member Login Bar',
          'description': 'This is where people sign up and members log in to your website.',
          'login-bar-show': {
            'label': 'What does the login bar show?',
            'option': {
              'pic-and-text': 'Profile Picture & Text',
              'text': 'Text',
              'pic': 'Profile Picture'
            }
          },
          'additional-text': {
            'label': 'Text',
            'option': {
              'hello-member': 'Hello Member',
              'welcome': 'Welcome',
              'member-name': 'Member Name'
            }
          },
          'signup-settings-button': {
            'label': 'Member Signup Setttings'
          }
        }
      },
      'Stats_Overview_Tips_AddLogo_Header': '',
      'Stats_Overview_Tips_AddLogo_Text': '',
      'Stats_Overview_Tips_AddLogo_Button_Label': '',
      'link-details': {
        'dialog': {
          'header': 'Link To',
          'ok': 'Done',
          'cancel': 'Cancel'
        },
        'none': {
          'label': 'None',
          'text': 'This element is not linked'
        },
        'page': {
          'label': 'Page',
          'select-page': {
            'text': 'SELECT PAGE'
          },
          'select-anchor': {
            'text': 'WHERE ON PAGE',
            'top-of-page': 'Top of Page'
          }
        },
        'web': {
          'label': 'Web Address',
          'text': 'WEB ADDRESS',
          'error': 'This is not a valid web address',
          'placeholder': 'e.g., www.yourlink.com'
        },
        'email': {
          'label': 'Email',
          'text': 'EMAIL ADDRESS',
          'error': 'This is not a valid email address',
          'placeholder': 'e.g., Info@mysite.com'
        },
        'phone': {
          'label': 'Phone',
          'text': 'PHONE NUMBER',
          'error': 'This is not a valid phone number',
          'help': {
            'text': 'People who reach your site on mobile or tablet can click this link to call you.',
            'cta': 'Learn more.'
          },
          'placeholder': 'e.g., +1-234-5678910'
        },
        'document': {
          'label': 'Document',
          'text': 'LINK TO',
          'select-file': {
            'button': 'Select File'
          },
          'replace-file': {
            'button': 'Replace File'
          }
        },
        'paypal': {
          'label': 'PayPal Donations',
          'toggle': {
            'label': 'Fixed Amount'
          },
          'email': {
            'label': 'paypal email address',
            'placeholder': 'e.g., info@mysite.com'
          },
          'amount': {
            'label': 'amount',
            'validation': 'Please set a valid amount'
          },
          'currency': {
            'label': 'currency'
          }
        }
      },
      'overlay': {
        'actions': {
          'toggle-paragraphs': 'Split',
          'toggle-paragraphs-off': 'Merge',
          'override-color': 'Override Color',
          'override-font-size': 'Resize Text',
          'set-map-style': 'Set map style',
          'hide': 'Hide',
          'focus': 'Focus',
          'edit': 'Edit',
          'rename': 'Rename',
          'crop': 'Crop',
          'delete': 'Delete',
          'delete-chat': 'Delete',
          'duplicate': 'Duplicate',
          'edit-address': 'Address',
          'open-media': 'Replace',
          'organize-gallery': 'Organize',
          'gallery-type': 'Change Style',
          'settings': 'Settings',
          'settings2': 'Customize',
          'link-to': 'Link to',
          'edit-seo': 'SEO',
          'edit-pages': 'Edit Pages',
          'list-item-to-page': 'Item to Page',
          'styles': 'Styles',
          'inbox': 'Open Inbox',
          'design': 'Design',
          'designs': 'Designs',
          'upgrade-chat': 'Upgrade Chat'
        },
        'messages': {
          'color-not-readable': '<p>This section is not readable.<br/><a ng-click=\'$ctrl.setColor(action, -1)\' href="">Undo</a></p>',
          'color-not-readable-2': 'This section is not readable.',
          'color-not-readable-2-fix-color': 'Fix colors',
          'apply-to-all': 'Apply to all list items',
          'reset-section': {
            'message': 'Text in this section is not readable.'
          },
          'reset-item': {
            'message': 'Text in this item is not readable.',
            'click': 'Reset Colors'
          }
        }
      },
      'pages_panel': {
        'page-name': {
          'error': 'Your page name must have<br />between 1-100 characters'
        },
        'add-page': {
          'desktop': '+ Add Page',
          'mobile': {
            'text': 'Want to add more pages to your site? Go to',
            'target': 'Desktop'
          }
        },
        'import-page': 'Import',
        'rename-page': {
          'input': {
            'placeholder': 'Enter name'
          }
        },
        'title': 'Pages'
      },
      'regex': {
        'email_format': '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
      },
      'notifications': {
        'version-info': 'Application version: {{staticsVersion}}. Content Version: {{contentVersion}}. Santa Version: {{santaVersion}}.'
      },
      'url': {
        'dashboard': 'https://www.wix.com/my-account'
      },
      'go-to-editor-popup': {
        'title': 'Fully Customize Your Website in the Wix Editor',
        'editor-feature1': 'Drag and drop any element to make your site look the way you want.',
        'editor-feature2': 'Change any font or color, and customize your site\'s design.',
        'editor-feature3': 'Optimize your site to look amazing on every device.',
        'editor-feature4': 'Add advanced Apps, stunning design features and so much more.',
        'warning': 'If you want to come back to Wix ADI, any changes you saved in the Wix Editor won\'t be transferred.',
        'cancel': 'Stay in Wix ADI',
        'go-to-editor': 'Go to Wix Editor',
        'spinner-message': 'Moving to Editor'
      },
      'floating-go-to-editor-link': {
        'use-advanced-editor': 'Use Advanced Editor',
        'advanced-editor': 'Advanced Editor'
      },
      'go-to-editor-link': {
        'title': 'Want More <br> Design Options?',
        'sub-title': 'Fully customize your site <br> in the Wix Editor. Add Apps, <br> use advanced design <br> features and more.',
        'sub-title-new': 'Go to the Wix Editor to use advanced design features and fully customize your site.',
        'button': 'Go to Wix Editor',
        'button-new': 'Go to Editor'
      },
      'assistant-menu': {
        'assistant-video-link': 'https://www.youtube.com/embed/U1d4B94KMeM?rel=0&autoplay=1&showinfo=0',
        'assistant-video-description': 'Follow the steps below to explore and<br/> complete your site. Start by watching this<br/> short <span class=\'assistant-video-link\' ng-click=\'$ctrl.openAssistantVideo($event)\'>intro video</span>.',
        'assistant-video-description-smartAssist': 'Follow the steps below to explore and<br>complete your site. Start by watching this short <span class=\'assistant-video-link\' ng-click=\'$ctrl.openAssistantVideo($event)\'>intro video</span>.'
      },
      'assistant-tab-list': {
        'smart-assist-tab-header': 'Smart Tips',
        'smart-assist-tab-body-title': 'Keep your site up to date. Here are some places that need your attention.'
      },
      'assistant-menu-header': {
        'description': 'Choose from the options below and I’ll<br>guide you to create your full website.'
      },
      'assistant-menu-bucket': {
        'essentials': {
          'name': 'Site Essentials',
          'description-without-tpa': 'Preview how your site looks to visitors. When you’re ready, Publish to go live.',
          'description-with-tpa': 'Preview how your site looks to visitors. Making changes? Publish so they go live.'
        },
        'change-content': {
          'name': 'Edit Content',
          'description': 'Change text, images, links and more on any section.'
        },
        'imported-content': {
          'name': 'Imported Content',
          'description': 'Find text and images ADI imported for use on your site.'
        },
        'change-site-design': {
          'name': 'Change Site Design',
          'description': 'Give your site a personal touch by changing it\'s look and feel.'
        },
        'change-section-design': {
          'name': 'Change Section Design',
          'description': 'Pick a new design, or customize the one you have. Edit text, fonts and more.'
        },
        'publish': {
          'name': 'Publish',
          'description': 'Go live so people can find your website online.'
        },
        'connect-domain': {
          'name': 'Connect Domain',
          'description': 'Make it easy for people to find your website online with your own domain.'
        },
        'seo': {
          'name': 'Get Found on Google',
          'description': 'Tell us more about your site, so people can find it online when they search.'
        }
      },
      'assistant-menu-task': {
        'preview': {
          'label': 'Preview your site',
          'deprecated-label': 'Preview Your Site'
        },
        'tpa': {
          'label': 'Manage Your {{tpa}}'
        },
        'edit-content': {
          'label': 'Edit section content',
          'deprecated-label': 'Edit Section Content'
        },
        'add-section': {
          'label': 'Add a new section',
          'deprecated-label': 'Add a New Section'
        },
        'add-page': {
          'label': 'Add a new page',
          'deprecated-label': 'Add a New Page'
        },
        'entire-website-design': {
          'label': 'Change theme',
          'deprecated-label': 'Change Website Design'
        },
        'color-design': {
          'label': 'Change colors',
          'deprecated-label': 'Change Website Colors'
        },
        'font-panel': {
          'label': 'Change fonts',
          'deprecated-label': 'Change Website Fonts'
        },
        'animation': {
          'label': 'Change animations',
          'deprecated-label': 'Change Website Animation'
        },
        'change-layout': {
          'label': 'Change design',
          'deprecated-label': 'Change Section Design'
        },
        'customize-section-design': {
          'label': 'Customize design',
          'deprecated-label': 'Customize Section Design'
        },
        'publish': {
          'label': 'Publish your site',
          'deprecated-label': 'Publish Your Site'
        },
        'connect-domain': {
          'label': 'Connect your domain',
          'deprecated-label': 'Connect Your Domain'
        },
        'page-seo': {
          'label': 'Improve SEO For This Page',
          'deprecated-label': 'Improve SEO For This Page'
        },
        'wiz-seo': {
          'label': 'Get an SEO Plan For Your Site'
        },
        'change-business-details': {
          'label': 'Change Business Type'
        }
      },
      'tooltips': {
        'intro_delete': 'Delete',
        'intro_card_url_invalid': 'URL is invalid',
        'intro_card_website_address_invalid': 'Web address is invalid',
        'intro_card_email_invalid': 'Email is invalid',
        'intro_card_url_default': 'Change the links so they go to your social pages (and not Wix’s)',
        'menu_home': 'Add & manage pages',
        'menu_add_section': 'Add a new section',
        'menu_add_dropdown': 'Add a page or a section',
        'menu_add_page': 'Add a new page',
        'menu_undo': 'Undo',
        'menu_redo': 'Redo',
        'menu_preview': 'See what your site looks like on desktop & mobile',
        'menu_publish': 'Share your website <br />with the world',
        'menu_saved_text': 'Your changes are<br/> automatically saved',
        'best_match': 'ADI scanned your imported text<br/> to find the best fit for this paragraph.',
        'zoom_in': 'Zoom in',
        'zoom_out': 'Zoom out',
        'overlay_plus': 'Add new section here',
        'overlay_edit': 'Edit Content',
        'overlay_settings': 'Change Settings',
        'overlay_change_preset': 'Change Design',
        'suggest_layout_change': 'Your photos will look better in a different layout, choose one now',
        'overlay_gear': 'More Actions',
        'overlay_delete': 'Delete',
        'overlay_move_up': 'Move up',
        'overlay_move_down': 'Move down',
        'overlay_move_page': 'Move',
        'overlay_duplicate_section': 'Duplicate',
        'overlay_rotate_color_section': 'Rotate colors',
        'overlay_enlarge_font_section': 'Enlarge fonts',
        'overlay_shrink_font_section': 'Shrink fonts',
        'overlay_enlarge_section_height': 'Enlarge section',
        'overlay_shrink_section_height': 'Shrink section',
        'overlay_print_additional_height': 'Print additional height',
        'overlay_image_fit_section': 'Toggle image fit',
        'overlay_reset_font_section': 'Reset fonts',
        'overlay_change_column_position': 'Change column position',
        'overlay_connect_domain': 'Connect Your Domain:<br/> Give your site a more professional look with your own branded domain name',
        'preview_toggle_desktop': 'Desktop Preview',
        'preview_toggle_mobile': 'Mobile Preview',
        'edit_mode_toggle_desktop': 'Edit for Desktop',
        'edit_mode_toggle_mobile': 'Edit for Mobile',
        'social_validation': 'Update social links to your own profiles!',
        'seo_title_validation': 'Title length must be 70 characters at most (including white spaces)',
        'seo_description_validation': 'Description length must be 160 characters at most (including white spaces)',
        'seo_keywords_validation': 'Can only accept up to 10 keywords and 250 characters at most (including white spaces)',
        'seo_url_validation': 'Page URL should be 1 character or more with no special characters (%,&,# etc.)',
        'seo_title_tooltip': 'This is your page title on Google. Add your page name, site name & what you do in 55-70 chars.',
        'seo_description_tooltip': 'Your site\'s description should be between 50-160 characters (including spaces)',
        'seo_keywords_tooltip': 'Use up to 10 keywords or phrases, separated by commas',
        'seo_url_tooltip': 'This is your page address on the web. It helps people find and remember the page, so make it catchy and relevant',
        'next_item': 'Next',
        'previous_item': 'Previous',
        'drag_section': 'Drag section',
        'close_preview': 'Back to Edit Mode',
        'crop_cancel': 'Cancel',
        'crop_apply': 'Apply',
        'publish_error_site_name_is_not_string': 'Cannot be empty',
        'publish_error_site_name_too_short': 'Your site name must be<br/>between 4-20 characters',
        'publish_error_site_name_too_long': 'Your site name must be<br/>between 4-20 characters',
        'publish_error_site_name_already_exists': 'Name already exists',
        'publish_error_site_name_invalid_chars': 'Invalid character',
        'publish_error_site_name_invalid': 'Invalid site name',
        'publish_error_site_name_ends_with_hyphen': 'Name cannot end with hyphen',
        'tpa_bookings_settings': 'Manage Services',
        'tpa_stores_settings': 'Manage Store',
        'tpa_blog_settings': 'Manage Blog',
        'header_fixed_header': 'Keep your header visible, <br/>even when your visitors scroll down the page. <br/>Preview your site to see <br/>it in action',
        'section_name_in_menu': 'Section name as it appears in your site\'s header menu',
        'design_coloration_palette_list': 'ADI recommends using these colors across your site.',
        'design_coloration_logo_palette': 'ADI automatically created this palette from the colors in your logo.',
        'design_kit_reset': 'Reset to default settings',
        'design_coloration_palette_edit': 'Edit Color Settings',
        'design_change_animation': 'Edit animation settings',
        'design_coloration_help': 'Help',
        'design_coloration_mode_toggle': 'Set light or dark<br/>background from<br/>your color palette',
        'design_change_font': 'Change Fonts',
        'design_coloration_main_color': 'Choose the main color for your site. ADI will create recommended palettes to match.',
        'design_coloration_add_color': 'Add your own custom color',
        'design_advanced_colors_reset': 'Reset Colors',
        'section_menu_clicked': 'To rename or hide a section in your menu, edit that section. <span class="cc-tooltip-link"><a ng-click="$ctrl.onSectionTooltipLinkClick()" href="">Learn More</a></span>',
        'page_menu_clicked': 'Manage your menu and navigate between pages in the <span class="cc-tooltip-link"><a ng-click="$ctrl.onPageTooltipLinkClick()" href="">pages manager</a></span>.',
        'animation_animation_type_help': 'Add a lively animation to the elements in your site',
        'animation_scroll_effects_help': 'Add impressive scroll effects to your site background images. To see them in action, click Preview and scroll.',
        'slideshow-transition-help': 'Click on each slide to add your own content.<br/> To change the order they appear, move them up<br/>or down.',
        'animation_page_transition_help': 'Add fun page transitions to bring your site to life! Click Preview to check them out',
        'intro_website_help': 'Info from your existing site will be automatically imported to your new Wix ADI site.',
        'design_coloration_readability_positive': 'Colors on your palette make the text easy to read on your site.',
        'design_coloration_readability_negative': 'These colors make text hard to read on your site.',
        'design_header_type_transparent_home': 'For a seamless modern<br/>look, make the background<br/>of your homepage transparent.',
        'design_header_type_transparent_non_home': 'The header background<br/>is only transparent on<br/>your homepage.',
        'design_header_type_transparent_disabled': 'For a transparent header,<br/>select a media background<br/>for your first section below<br/>the header and try again.',
        'design_header_type_fixed': 'Fixed headers are always<br/>visible, even when your<br/>visitors scroll.',
        'section_background_categories_color': 'Background colors from your palette.',
        'section_background_categories_media': 'Images, videos and galleries that best complement your website.',
        'section_background_categories_pattern': 'Pattern colors are taken<br/> from your site\'s palette. Change your site colors to see other options.',
        'mobile_text_field_disabled': 'Want to edit your text?<br/>Go to <span class="cc-tooltip-link"><a ng-click="$ctrl.onTooltipLinkClick()" href="">Desktop</a></span>.',
        'mobile_media_edit_disabled': 'Want to replace your media? Go to <span class="cc-tooltip-link"><a ng-click="$ctrl.onTooltipLinkClick()" href="">Desktop</a></span>.',
        'user_web_address': '',
        'floating-go-to-editor-link': 'Go to the Wix Editor for more site customization options',
        'web-address-is-not-valid': 'Please type a vaild web address',
        'media-settings': {
          'size-button': {
            'cropped': 'Manually crop this image<br/>for the exact look you want.',
            'croppedheader': 'Manually crop this image<br/>for the exact look you want.',
            'uncropped': 'To show a full image,<br/>pick a new design.',
            'strip': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'stripheader': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'column': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'background': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'backgroundheader': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'backgroundlist': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'backgroundfull': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'gallery': 'Choose a gallery to display your images.'
          },
          'disabled-tab-video': 'For video options<br />options, go to <span class="cc-tooltip-link"><a href="" ng-click="$ctrl.onTooltipClick()">Designs</a></span>',
          'disabled-tab-gallery': 'For gallery options<br />options, go to <span class="cc-tooltip-link"><a href="" ng-click="$ctrl.onTooltipClick()">Designs</a></span>'
        },
        'image': 'Image',
        'video': 'Video',
        'gallery': 'Gallery',
        'pattern': 'Pattern',
        'shape': 'Shape',
        'brightness': 'Choose how dark<br/>or light your site<br/>background looks',
        'saturation': 'Define how colorful<br/>you\'d like your site<br/>to appear',
        'link-details-paypal': {
          'fixed': 'Tooltip',
          'toggle': {
            'on': 'Toggle off so site visitors can donate any amount.',
            'off': 'Set the amount you\'d like site visitors to donate.'
          }
        },
        'fake-browser-bar-url': 'Your web address is <br><a class="fake_browser_bar_tooltip_url" href="{{URL}}" target="_blank">{{shortUrl}}</a>',
        'text-manager-link-adi': 'Use custom text from ADI.',
        'text-manager-link-imported': 'Use text imported from your website.',
        'members-area': {
          'signup-settings-panel': {
            'termsOfUse': {
              'link': 'Create a Terms of Use page and link to it when people sign up. For guidelines on creating Terms of Use, <span class="cc-tooltip-link"><a href="" ng-click="$parent.$parent.$parent.$ctrl.onTooltipClick($parent.$parent.$parent.policy)">read more</a></span>'
            },
            'privacyPolicy': {
              'link': 'Create a Privacy Policy page and link to it when people sign up. For guidelines on creating a privacy policy, <span class="cc-tooltip-link"><a href="" ng-click="$parent.$parent.$parent.$ctrl.onTooltipClick($parent.$parent.$parent.policy)">read more</a></span>'
            },
            'codeOfConduct': {
              'link': 'Created a Code of Conduct page? Link to it here so people can see it when they sign up to your site.'
            }
          },
          'field-editor': {
            'button': 'Members can sign up<br>and log in to their accounts<br> from here. <span class="cc-tooltip-link"><a href="" ng-click="$parent.$parent.$ctrl.onTooltipClick()">Learn more</a></span>'
          },
          'info-popup': 'These pages are for your site members only.<br/>They see them when they log into their accounts.<br/><span class="cc-tooltip-link"><a href="" ng-click="$ctrl.onTooltipClick(item)"> Learn More</a></span>'
        },
        'focal-point': {
          'hint': 'Drag to select<br/>the image center'
        },
        'import-site': {
          'import-page': {
            'already-imported': 'This page was<br/>successfully imported.<br/><span class=\'link-button\' ng-click=\'$ctrl.handleImport(item)\'>Import this page again</span>'
          }
        }
      },
      'new-tour': {
        'welcome2': {
          'step2000': {
            'title': 'Pick a design<br> you love',
            'content': 'Here are a few designs you might like.<br>You can easily change it later.'
          }
        }
      },
      'smart-assist': {
        'tour': {
          'unlinked-button': {
            'link-or-hide-step': {
              'content': 'Add a link to the button or hide it from this section.',
              'content-for-list-items': 'Add a link to the button or hide all the buttons on this list.',
              'link-button-text': 'Link it',
              'hide-button-text': 'Hide it',
              'hide-button-text-for-list-items': 'Hide all'
            },
            'button-linked-step': {
              'content': 'Nice! This button is linked.',
              'done-button-text': 'Done'
            },
            'button-hidden-step': {
              'content': 'This button is hidden.',
              'content-for-list-items': 'All the buttons on this list are hidden.',
              'done-button-text': 'Done'
            }
          },
          'import-content': {
            'text-manager-panel': {
              'select': 'See text you like? Use it on your site. Replace your text with something new or Add on.'
            },
            'done-use-text': 'Got It'
          },
          'socials-default-link': {
            'hide-or-update-step': {
              'content': 'Connect your social accounts so<br>people can follow you.',
              'hide-icons-button': 'Hide from Site',
              'update-links-button': 'Update Links'
            },
            'link-socials-step': {
              'content': 'Make it easy for people to find and follow you. Add and update your social links here.'
            },
            'socials-linked-step': {
              'content': 'Nice! All your accounts<br/>are connected.',
              'done-button-text': 'Done'
            },
            'hide-socials-globally': {
              'content': 'Social icons are hidden from this section. You can hide all the social icons from your website in a click.',
              'hide-all-button-text': 'Hide All Icons'
            },
            'socials-globally-hidden': {
              'content': 'Social icons are hidden.',
              'done-button-text': 'Done'
            },
            'socials-cant-be-hidden-step': {
              'content': 'Some social panels can\'t be hidden',
              'done-button-text': 'Got It'
            }
          }
        },
        'unlinked-button-issue': {
          'text': 'Link the {{buttonName}} button',
          'text-for-list-items': 'Link the button on your<br/>list item {{listItemName}}'
        },
        'better-layout-issue': {
          'text': 'Switch up the design on your {{sectionType}} section',
          'fix': 'Change design'
        },
        'image-upscale-issue': {
          'text': 'Automatically improve the resolution of this image.',
          'fix': 'Enhance Image'
        },
        'socials-default-links-issue': {
          'text': 'Connect your social accounts'
        },
        'publish_site_interval-issue': {
          'text': 'It’s a great time to publish!'
        },
        'import-content-issue': {
          'text': 'Find text ADI imported and use it on your site.',
          'fix': 'Use Your Text'
        },
        'import-images-issue': {
          'text': 'Find images ADI imported and use them on your site.',
          'fix': 'Use Your Images'
        },
        'issue': {
          'fix': 'Let\'s Go'
        },
        'empty-state': {
          'before-suggestions': {
            'title': 'Smart Tips Will Appear Here',
            'description': 'Find out when something on your site needs to be updated, like contact info social links and more.'
          },
          'after-suggestions': {
            'title': 'Good Job! You\'re Up To Date',
            'description': 'Find out when something on your site needs an update.'
          },
          'go-to-assistant-bucket': 'See What\'s Next'
        },
        'dividers': {
          'general': 'General',
          'page': '{{pageName}} Page',
          'section': '{{sectionName}} Section'
        },
        'divider': {
          'general': 'Site Essentials',
          'content': 'Site Content',
          'imported-content': 'Your Imported Content',
          'upgrade': 'Upgrade'
        }
      },
      'background-scroll': {
        'none': 'None',
        'parallax': 'Parallax',
        'reveal': 'Reveal',
        'zoom-in': 'Zoom In',
        'fade-in': 'Fade In'
      },
      'page-transition': {
        'none': 'None',
        'horizontal': 'Horizontal',
        'vertical': 'Vertical',
        'cross-fade': 'Cross Fade',
        'out-in': 'Out In'
      },
      'animation-pattern': {
        'none': 'None',
        'fade': 'Fade',
        'float': 'Float',
        'fly': 'Fly',
        'fold': 'Fold',
        'slide': 'Slide',
        'turn': 'Turn'
      },
      'tpa_add_service_title': 'Add your first services to start getting booked',
      'tpa_add_service_button': 'Create a Service',
      'tpa_add_payment_title': 'Connect a payment method to start getting paid',
      'tpa_add_payment_button': 'Connect',
      'tpa_set_appointment_hours_title': 'Set your available hours so clients can book your time',
      'tpa_set_appointment_hours_button': 'Set Hours',
      'tpa_upgrade_text': 'Upgrade to premium to start accepting payments',
      'tpa_upgrade_button': 'Upgrade now',
      'tpa_add_product_title': 'Add your first product',
      'tpa_add_product_button': 'Add a Product',
      'tpa_setup_shipping_title': 'Set up your shipping & tax regions',
      'tpa_setup_shipping_button': 'Set Up',
      'media': {
        'image-alignment-options': {
          'top': 'Top',
          'center': 'Center',
          'bottom': 'Bottom'
        }
      },
      'viewer': {
        'contact-form': {
          'attributes': {
            'nameFieldLabel': 'Name',
            'emailFieldLabel': 'Email',
            'phoneFieldLabel': 'Phone',
            'addressFieldLabel': 'Address',
            'subjectFieldLabel': 'Subject',
            'messageFieldLabel': 'Message',
            'submitButtonLabel': 'Send',
            'successMessage': 'Your details were sent successfully!',
            'errorMessage': 'Please provide a valid email',
            'validationErrorMessage': 'Please fill in all required fields.'
          }
        },
        'drop-down-menu': {
          'moreButtonLabel': 'More'
        }
      },
      'modelTree': {
        'homepage': 'Home'
      },
      'media-organize': {
        'custom-tab': {
          'title': 'Recommended',
          'recommended-section': 'Recommended especially for your section',
          'from-business': 'Images from your business',
          'free': 'Free from Wix',
          'show-all': 'Show All'
        },
        'gallery': {
          'title': 'Organize Your Gallery Images',
          'subtitle': 'Drag and drop your media into position to get your gallery nicely organized.'
        },
        'type': {
          'title': 'Media Manager'
        },
        'video': {
          'subtitle': 'Select Video',
          'suggestions-title': 'Other suggested videos, select a video to replace the one on top'
        },
        'shape': {
          'subtitle': 'Select Shape',
          'suggestions-title': 'Other suggested shapes, select a shape to replace the one on top'
        },
        'clipart': {
          'subtitle': 'Select Clipart',
          'suggestions-title': 'Other suggested cliparts, select a clipart to replace the one on top'
        }
      },
      'defaults': {
        'contact': {
          'address': '500 Terry Francois Street San Francisco, CA 94158',
          'map-address': '500 Terry Francois Street San Francisco, CA 94158',
          'phone': '123-456-7890',
          'fax': '456-789-1234'
        },
        'general': {
          'tagline': 'Business tagline',
          'copyright-message': '©2023 by [Business Name]. Proudly created with Wix.com',
          'button': 'Get In Touch'
        },
        'footer': {
          'follow': 'Follow',
          'address': 'Address',
          'contact': 'Contact'
        }
      },
      'text-manager': {
        'default-source': 'ADI',
        'field-editor': {
          'link': 'TEXT OPTIONS',
          'imported-text': 'Use Your Text',
          'use-imported-text': 'Use Text',
          'use-imported-images': 'Use Images',
          'your-text': 'View More Text'
        },
        'dialog': {
          'title': 'TEXT OPTIONS'
        }
      },
      'text-manager-dialog': {
        'description': 'Use text you’ve imported or custom text from ADI.',
        'adi': {
          'description': 'ADI selected this text for use on your site.'
        },
        'imported-text': {
          'description': 'Use text you\'ve imported, or find custom\r\n text from ADI.'
        },
        'actions': {
          'replace': 'Replace Text',
          'append': 'Add'
        },
        'best-match-label': 'RECOMMENDED',
        'no-text-found': 'No Texts Found',
        'best-match-text': 'Recommended Text',
        'best-match-description': 'ADI scanned your imported text to find the best fit for this paragraph.',
        'search-placeholder': 'Search'
      },
      'import-site': {
        'import-page': {
          'panel-header': 'Import Your Pages',
          'description': 'ADI imported these pages from {{site}}. Select any page to add it to your new site.',
          'loader': 'Analyzing Available Pages'
        }
      },
      'yair': {
        'test': 'hello',
        'test|abTranslate_1|custom': 'hi'
      },
      'chen': {
        'test': 'beep',
        'test|abTranslate_1|custom': 'boop'
      },
      'image-upscale-modal': {
        'enhance-description': 'Enhance Image'
      },
      'business-details-changer': {
        'main-title': 'Tell Us More About You',
        'secondary-title': {
          'step-0': {
            'title': 'What kind of website do you want to create?'
          },
          'step-1': {
            'title': 'What is the name of your business or website?'
          }
        }
      },
      'Tooltips': {
        'members-area': {
          'signup-settings-panel': {
            'codeofConduct': {
              'link': 'Created a Code of Conduct page? Link to it here so people can see it when they sign up to your site.'
            }
          }
        }
      },
      'site-converter': {
        'default': {
          'item-title': 'Item {{index}}'
        }
      }
    };
    $translateProvider.translations('en', translations);
    $translateProvider.translations(translations);
    $translateProvider.preferredLanguage('en');
  }
]);