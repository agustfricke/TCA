from django.db import models
from users.models import User


class Curso(models.Model):
    user            = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title           = models.CharField(max_length=250, null=True, blank=True)
    image           = models.ImageField(null=True, blank=True, default='/curso.jpg')
    MY_CHOICES = (
        ('a', 'Backend'),
        ('b', 'Frontend'),
        ('c', 'Hacking'),
        ('d', 'Machine Learning'),
    )
    category        = models.CharField(max_length=1, choices=MY_CHOICES)
    description     = models.TextField(null=True, blank=True)
    rating          = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    num_reviews     = models.IntegerField(null=True, blank=True, default=0)
    price           = models.DecimalField(max_digits=10, decimal_places=10, null=True, blank=True)
    created         = models.DateTimeField(auto_now_add=True)
    wallet          = models.CharField(max_length=200)


class Review(models.Model):
    curso           = models.ForeignKey(Curso, on_delete=models.SET_NULL, null=True)
    user            = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    rating          = models.IntegerField(null=True, blank=True, default=0)
    comment         = models.TextField(null=True, blank=True)
    created         = models.DateTimeField(auto_now_add=True)



class Episodio(models.Model):
    curso           = models.ForeignKey(Curso, on_delete=models.SET_NULL, null=True)
    user            = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title           = models.CharField(max_length=250, null=True, blank=True)
    description     = models.TextField(null=True, blank=True)
    video           = models.FileField(default='placeholder.mp4')
    image           = models.ImageField(null=True, blank=True, default='/curso.jpg')
    file            = models.FileField(null=True, blank=True)



class Comment(models.Model):
    episodio        = models.ForeignKey(Episodio, on_delete=models.SET_NULL, null=True)
    user            = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    description     = models.TextField(null=True, blank=True)
    created         = models.DateTimeField(auto_now_add=True)



    



