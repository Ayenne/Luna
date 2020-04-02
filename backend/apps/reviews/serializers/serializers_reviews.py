from rest_framework import serializers
from rest_framework.fields import SerializerMethodField

from apps.reviews.models.models_reviews import Review
from apps.users.serializers import UserSerializer
from apps.restaurants.serializers import RestaurantSerializer


class ReviewSerializer(serializers.ModelSerializer):
    idUser = UserSerializer(read_only=True)
    idRestaurant = RestaurantSerializer(read_only=True)
    amount_of_likes = serializers.SerializerMethodField()
    amount_of_comments = serializers.SerializerMethodField()

    @staticmethod
    def get_amount_of_likes(review):
        return review.fk_Like_to_Review.all().count()

    @staticmethod
    def get_amount_of_comments(review):
        return review.fk_Comment_to_Review.all().count()


    class Meta:
        model = Review
        fields = "__all__"