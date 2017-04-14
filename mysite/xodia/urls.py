
from django.conf.urls import url,patterns
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from mysite import settings
import views 


urlpatterns = [      
                   url(r'^$',views.homepage,name="homepage"),
                   url(r'^sign_up/$',views.signup,name="signup"),
                   url(r'^log_in/$',views.login_view, name="login"),
                   url(r'^signuppage/$',views.signuppage, name="signuppage"),
                   #url(r'^loginpage/$',views.loginpage, name="loginpage"),
                   url(r'^logout/$',views.logout_view,name="logout"),
                   url(r'^personal_homepage/$',views.personal_home ,name="personal_home"),
                   url(r'^test/$',views.test,name="test"),
                   #url(r'^submit/$',views.submit,name="submit"),
                   url(r'^testpage/$',views.testpage,name="testpage"),
                   url(r'^get_game/$',views.gettestgame,name="getgame"),
                   url(r'^clickable/$',views.clickable,name="clickable"),
                   url(r'^nolang/$',views.nolang,name="nolang" )
      ]
                   
"""urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += patterns( '',
        (r'^media/(?P<path>.*)',
         'django.views.static.serve',
         {'document_root': settings.MEDIA_ROOT}), )"""