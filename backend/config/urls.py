from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Autenticación JWT
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # APIs de módulos
    path('api/clientes/', include('core.clientes.urls')),
    path('api/usuarios/', include('core.usuarios.urls')),
    path('api/empresas/', include('core.empresas.urls')),
    path('api/pagos/', include('core.pagos.urls')),
    path('api/hotel/', include('modulos.hotel.urls')),
    path('api/restaurante/', include('modulos.restaurante.urls')),
    path('api/facturacion/', include('integracion.facturacion.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)