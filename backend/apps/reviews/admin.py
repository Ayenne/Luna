from django.contrib import admin
from apps.reviews.models.models_reviews import Review
from apps.reviews.models.models_comments import Comment
from apps.reviews.models.models_likes import Like

admin.site.register(Review)
admin.site.register(Comment)
admin.site.register(Like)
