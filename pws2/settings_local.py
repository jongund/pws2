import os, sys

from pws2.settings import BASE_DIR

EMAIL_HOST               = 'smtp.webfaction.com'
EMAIL_PORT               = '587'
EMAIL_USE_TLS            = True
EMAIL_USE_SSL            = True
EMAIL_HOST_USER          = 'info_prairiewindspeech'
EMAIL_HOST_PASSWORD      = 'pws2014'
DEFAULT_FROM_EMAIL       = 'info@prairiewindspeech.com'
SERVER_EMAIL             = 'info@prairiewindspeech.com'

INFO_EMAIL='info@prairiewindspeech.com'

DEBUG = True

DATABASES = {
    'default': {
          'ENGINE' : 'django.db.backends.postgresql_psycopg2', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
            'NAME' : 'pws_dev',                      # Or path to database file if using sqlite3.
            'USER' : 'pws',                          # Not used with sqlite3.
        'PASSWORD' : 'pws2o14',                  # Not used with sqlite3.
             'HOST': 'localhost',                # Set to empty string for localhost. Not used with sqlite3.
             'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
    }
}


# Hosts/domain names that are valid for this site; required if DEBUG is False
# See https://docs.djangoproject.com/en/1.5/ref/settings/#allowed-hosts
ALLOWED_HOSTS = ['localhost', '127.0.0.1']

# Absolute path to the directory static files should be collected to.
# Don't put anything in this directory yourself; store your static files
# in apps' "static/" subdirectories and in STATICFILES_DIRS.
# Example: "/home/media/media.lawrence.com/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "static")

print('   BASE_DIR: ' + BASE_DIR)
print('STATIC_ROOT: ' + STATIC_ROOT)

STATICFILES_DIRS = (
  os.path.join(BASE_DIR, "pws2/static"),
)
