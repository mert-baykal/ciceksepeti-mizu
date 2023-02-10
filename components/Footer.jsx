import Image from "next/image";
import youtube from "assets/youtube.svg"
import instagram from "assets/instagram.svg"
import twitter from "assets/twitter.svg"
import facebook from "assets/facebook.svg"
import pinteres from "assets/pinterest.svg"
import qrCode from "assets/qr.png"
import appStore from "assets/app-store.svg"
import playStore from "assets/play-store.svg"
import twoAndroid from "assets/two-android.png"
import Logo from "assets/logo.svg"
import Link from "next/link";


const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer__wrapper container">
                    <div className="footer__top">
                        <div className="footer__top-image">
                            <Image src={twoAndroid} alt="Phone Image" width={352} height={360} />
                        </div>
                        <div className="footer__top-info">
                            <div className="footer__top-info_content">
                                <div className="footer__top-info_image">
                                    <Image src={qrCode} alt="QR code" width={60} height={60} />
                                </div>
                                <div className="footer__top-info_desc">
                                    <p><strong>Çiçek Sepeti Mobil Uygulamayı İndirin</strong></p>
                                    <p>Mobil Uygulamayı QR Kod ile İndirin.</p>
                                </div>
                            </div>
                            <div className="footer__top-info_links">
                                <Image src={playStore} alt="Play Store" />
                                <Image src={appStore} alt="App Store" />
                            </div>
                        </div>
                    </div>

                    <div className="footer__middle">
                        <div className="footer__middle-infos">
                            <div className="footer__middle-infos_logo">
                                <Image src={Logo}  alt="Logo" />
                            </div>
                            <div className="footer__middle-infos_social">
                                <Image src={facebook} alt="facebook" />
                                <Image src={twitter} alt="twitter" />
                                <Image src={instagram} alt="instagram" />
                                <Image src={youtube} alt="youtube" />
                                <Image src={pinteres} alt="pinteres" />
                            </div>

                            <div className="footer__middle-infos_content">
                            CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine <Link href="">buradan</Link> ulaşabilirsiniz.
                            </div>
                        </div>
                        <div className="footer__middle-menus">
                            <div className="footer__middle-menus_item">
                                <div className="footer__middle-menus-title">
                                    Faydalı Bilgiler
                                </div>
                                <div className="footer__middle-menus_links">
                                    <ul>
                                        <li><Link href="">Çiçek Bakımı</Link></li>
                                        <li><Link href="">Çiçek Eşliğinde Notlar</Link></li>
                                        <li><Link href="">Çiçek Anlamları</Link></li>
                                        <li><Link href="">Özel Günler</Link></li>
                                        <li><Link href="">Mevsimlere Göre Çiçekler</Link></li>
                                        <li><Link href="">BonnyFood Saklama Koşulları</Link></li>
                                        <li><Link href="">Site Haritası</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer__middle-menus_item">
                                <div className="footer__middle-menus-title">
                                    Kurumsal
                                </div>
                                <div className="footer__middle-menus_links">
                                    <ul>
                                        <li><Link href="">Hakkımızda</Link></li>
                                        <li><Link href="">Kariyer</Link></li>
                                        <li><Link href="">ÇiçekSepeti’nde Satış Yap</Link></li>
                                        <li><Link href="">Kurumsal Müşterilerimiz</Link></li>
                                        <li><Link href="">Reklamlarımız</Link></li>
                                        <li><Link href="">Basında Biz</Link></li>
                                        <li><Link href="">Kampanyalar</Link></li>
                                        <li><Link href="">Vizyonumuz</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer__middle-menus_item">
                                <div className="footer__middle-menus-title">
                                    İletişim
                                </div>
                                <div className="footer__middle-menus_links">
                                    <ul>
                                        <li><Link href="">Bize Ulaşın</Link></li>
                                        <li><Link href="">Sıkça Sorulan Sorular</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer__middle-menus_item">
                                <div className="footer__middle-menus-title">
                                Gizlilik Sözleşmesi
                                </div>
                                <div className="footer__middle-menus_links">
                                    <ul>
                                        <li><Link href="">Mesafeli Satış Sözleşmesi</Link></li>
                                        <li><Link href="">Bilgi Toplumu Hizmetleri</Link></li>
                                        <li><Link href="">Bilgi Toplumu Hizmetleri</Link></li>
                                        <li><Link href="">Gizlilik Sözleşmesi</Link></li>
                                        <li><Link href="">Ödeme Seçenekleri</Link></li>
                                        <li><Link href="">Hesap Bilgileri</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin adresi; ÇiçekSepeti.
                    </div>
                </div>

                <div className="footer__copyrights">
                    Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş
                </div>
            </div>
        </footer>
    );
}

export default Footer;
