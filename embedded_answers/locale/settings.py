"""
Django settings for embedded_answers project.
For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/
For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""
import os

SECRET_KEY = os.getenv('DJANGO_SECRET', 'open_secret')

# Application definition

INSTALLED_APPS = (
    'statici18n',
    'embedded_answers',
)

# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_URL = '/static/'

# statici18n
# http://django-statici18n.readthedocs.io/en/latest/settings.html
LANGUAGES = [
    ('en', 'English - Source Language'),
    ('pl', 'Polski'),
]

STATICI18N_DOMAIN = 'text'
STATICI18N_PACKAGES = (
    'embedded_answers',
)
STATICI18N_ROOT = 'embedded_answers/static/js'
STATICI18N_OUTPUT_DIR = 'translations'

STATICI18N_NAMESPACE = 'embedded_answersi18n'

