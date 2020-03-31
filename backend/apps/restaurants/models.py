from django.db import models
from phone_field import PhoneField
from django_countries.fields import CountryField


class Restaurant(models.Model):

    CATEGORY = (
        ('FRENCH', 'French'),
        ('ITALIAN', 'Italian'),
        ('PERUVIAN', 'Peruvian'),
        ('CHINESE', 'Chinese'),
        ('JAPANESE', 'Japanese'),
        ('AMERICAN', 'American')
    )

    PRICE_LEVEL = (
        ('1', 'Inexpensive'),
        ('2', 'Moderately expensive'),
        ('3', 'Expensive'),
        ('4', 'Very expensive')
    )

    name = models.TextField(max_length=90)
    category = models.CharField(
        max_length=100,
        choices=CATEGORY,
        default='FRENCH'
    )
    country = CountryField(blank_label='(select country)')
    street = models.CharField(max_length=270)
    city = models.CharField(max_length=90)
    zip = models.CharField(max_length=45)
    website = models.CharField(max_length=90)
    phone = PhoneField(blank=True)
    email = models.CharField(max_length=90)
    opening_hours = models.CharField(max_length=45)
    price_level = models.CharField(
        max_length=100,
        choices=PRICE_LEVEL,
        default='2'
    )
    image = models.ImageField(upload_to='', blank=True)

    def __str__(self):
        return f'Restaurant {self.id}: {self.name}'