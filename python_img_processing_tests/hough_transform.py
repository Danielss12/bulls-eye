import os, os.path

import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import numpy as np

from skimage.io import imread, use_plugin
from skimage import data, color, img_as_ubyte
from skimage.feature import canny
from skimage.transform import hough_ellipse
from skimage.draw import ellipse_perimeter

# img_name = 'stinkbug.png'
STATIC_URL = 'assets/'
ROOT = os.path.abspath(os.pardir) # this will return current directory in which python file resides.
assets = os.path.join(ROOT, STATIC_URL)

def load(f, as_grey=False):
    """Load an image file located in the data directory.

    Parameters
    ----------
    f : string
        File name.
    as_grey : bool, optional
        Convert to greyscale.

    Returns
    -------
    img : ndarray
        Image loaded from ``skimage.data_dir``.
    """
    use_plugin('pil')
    return imread(os.path.join(assets, f), as_grey=as_grey)

def stinkbug():
	return load('stinkbug.png')

# Load picture, convert to grayscale and detect edges

# img_path = os.path.join(assets, img_name)
# print img_path
# image_rgb = mpimg.imread('stinkbug.png')
# print image_rgb
# print assets

# print my_image


image_rgb = stinkbug()

# print image_rgb

image_gray = color.rgb2gray(image_rgb)
edges = canny(image_gray, sigma=2.0,
              low_threshold=0.55, high_threshold=0.8)

# Perform a Hough Transform
# The accuracy corresponds to the bin size of a major axis.
# The value is chosen in order to get a single high accumulator.
# The threshold eliminates low accumulators
result = hough_ellipse(edges, accuracy=20, threshold=250,
                       min_size=100, max_size=120)
result.sort(order='accumulator')

print result

# # Estimated parameters for the ellipse
# best = list(result[-1])
# yc, xc, a, b = [int(round(x)) for x in best[1:5]]
# orientation = best[5]

# # Draw the ellipse on the original image
# cy, cx = ellipse_perimeter(yc, xc, a, b, orientation)
# image_rgb[cy, cx] = (0, 0, 255)
# # Draw the edge (white) and the resulting ellipse (red)
# edges = color.gray2rgb(img_as_ubyte(edges))
# edges[cy, cx] = (250, 0, 0)

# fig2, (ax1, ax2) = plt.subplots(ncols=2, nrows=1, figsize=(8, 4), sharex=True,
#                                 sharey=True,
#                                 subplot_kw={'adjustable':'box-forced'})

# ax1.set_title('Original picture')
# ax1.imshow(image_rgb)

# ax2.set_title('Edge (white) and result (red)')
# ax2.imshow(edges)

# plt.show()