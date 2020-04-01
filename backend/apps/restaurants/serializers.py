from rest_framework import serializers

from apps.restaurants.models import Restaurant
from apps.reviews.models.models_reviews import Review


class RestaurantSerializer(serializers.ModelSerializer):

    # rating = serializers.SerializerMethodField("get_rating")
    #
    # def get_rating(self, instance):
    #     restaurant_reviews = Review.objects.filter(idRestaurant__id=instance.id).order_by("-date_created")
    #     return sum(restaurant_reviews) / len(restaurant_reviews)

    # class Meta:
    #     model = Restaurant
    #     fields = ["id", "name", "category", "rating", "street", "zip", "country", "website", "phone", "email", "opening_hours", "price_level", "image"]

    class Meta:
        model = Restaurant
        fields = "__all__"
