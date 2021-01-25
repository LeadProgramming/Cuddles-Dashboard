const withBundleAnalyzer = import('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
module.exports = {
    images: {
        domains: ['https://cdn3.volusion.com/9nxdj.fchy5/v/vspfiles/photos/AR-01779-2.jpg?v-cache=1602075128'],
    },
};
module.export = withBundleAnalyzer({});
