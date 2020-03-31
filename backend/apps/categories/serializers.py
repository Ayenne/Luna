from rest_framework import serializers

from apps.categories.models import Category
from apps.restaurants.serializers import RestaurantSerializer


class CategorySerializer(serializers.ModelSerializer):
    restaurant = RestaurantSerializer(read_only=True)


    class Meta:
        model = Category
        fields = '__all__'
