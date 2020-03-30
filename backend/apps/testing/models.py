from django.db import models


class TestModel(models.Model):
    testText = models.TextField()

    def __str__(self):
        return f'Test: {self.testText}'
