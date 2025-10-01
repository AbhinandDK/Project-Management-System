import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'elixir.settings')
django.setup()

from django.contrib.auth.models import User
print(User.objects.filter(is_superuser=True))
