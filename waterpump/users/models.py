from django.contrib.auth.models import AbstractUser
from django.db.models import CharField, ForeignKey
from django.urls import reverse
from waterpump.pumps import models as pump_models
from django.utils.translation import ugettext_lazy as _

class User(AbstractUser):

    """ User Model """

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = CharField(_("Name of User"), blank=True, max_length=255)
    phone = CharField(max_length=140)
    managing = ForeignKey(pump_models.City, null=True, on_delete='CASCADE')
    fcmToken = CharField(blank=True, max_length=500)
    jwtToken = CharField(blank=True, max_length=500)

    def __str__(self):
        return self.username
        
    

    # def get_absolute_url(self):
    #     return reverse("users:detail", kwargs={"username": self.username})
