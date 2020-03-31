from django.db import models
from django.contrib.auth import get_user_model

from apps.reviews.models.models_reviews import Review
from apps.reviews.models.models_comments import Comment

User = get_user_model()


class Like(models.Model):
    idUser = models.ForeignKey(
        to=User,
        related_name="fk_Like_to_User",
        on_delete=models.CASCADE
    )
    idReview = models.ForeignKey(
        to=Review,
        related_name="fk_Like_to_Review",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    idComment = models.ForeignKey(
        to=Comment,
        related_name="fk_Like_to_Comment",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return f'Like #{self.id}'