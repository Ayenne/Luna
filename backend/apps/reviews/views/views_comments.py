from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.response import Response

from apps.reviews.serializers.serializers_comments import CommentSerializer

from apps.reviews.models.models_comments import Comment
from apps.reviews.models.models_reviews import Review


class ListUserCommentsDestroyReviewComments(GenericAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def get(self, request, *args, **kwargs):
        queryset
        idUser = self.get_object
        comments = Comment.objects.filter(idUser=idUser).order_by("-date_created")
        return Response(self.get_serializer(instance=comments).data)

    def delete(self):
        pass


class CreateReviewComment(CreateAPIView):
    serializer_class = CommentSerializer
    queryset = Review.objects.all()
    lookup_url_kwarg = 'idReview'

    def create(self, request, *args, **kwargs):
        review = self.get_object()
        comment = Comment(content=request.data['content'], idUser=request.user, idReview=review)
        comment.save()
        return Response(self.get_serializer(instance=comment).data)