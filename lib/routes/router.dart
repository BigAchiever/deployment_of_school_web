import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:symbiosis_school_jabalpur/pages/about/about.dart';
import 'package:symbiosis_school_jabalpur/pages/contact/contact.dart';
import 'package:symbiosis_school_jabalpur/pages/error_page/error_404.dart';
import 'package:symbiosis_school_jabalpur/pages/home/home_ui.dart';
import 'package:symbiosis_school_jabalpur/pages/notifications/notification_model.dart';
import 'package:symbiosis_school_jabalpur/pages/learn_more/learn_more1.dart';
import 'package:symbiosis_school_jabalpur/pages/learn_more/learn_more2.dart';
import 'package:symbiosis_school_jabalpur/pages/notifications/notification_mobile_page.dart';
import 'package:symbiosis_school_jabalpur/pages/social_media/social_media.dart';
import 'package:symbiosis_school_jabalpur/routes/getpagebuilder.dart';
import '../layout/appbar_and_layout.dart';

// Scaffold with persistent AppBar
class ScaffoldWithNavBar extends StatelessWidget {
  final StatefulNavigationShell navigationShell;

  const ScaffoldWithNavBar({required this.navigationShell, super.key});

  @override
  Widget build(BuildContext context) {
    print(
        'ScaffoldWithNavBar: Building with currentIndex=${navigationShell.currentIndex}');
    return Scaffold(
      body: AppbarWidget(
        selectedIndex: navigationShell.currentIndex,
        body: navigationShell,
        mobileBody: navigationShell,
      ),
    );
  }
}

// GoRouter configuration
final router = GoRouter(
  initialLocation: '/',
  debugLogDiagnostics: true, // Enable go_router debug logging
  errorBuilder: (context, state) {
    print('GoRouter: Error route triggered: ${state.uri}');
    return const NotFoundPage();
  },
  redirect: (context, state) {
    print('GoRouter: Redirecting for path: ${state.uri}');
    if (state.uri.toString().startsWith('/')) {
      return null; // Let go_router handle valid paths
    }
    return '/'; // Redirect invalid paths to home
  },
  routes: [
    StatefulShellRoute.indexedStack(
      builder: (context, state, navigationShell) {
        print('StatefulShellRoute: Building with path: ${state.uri}');
        return ScaffoldWithNavBar(navigationShell: navigationShell);
      },
      branches: [
        StatefulShellBranch(
          routes: [
            GoRoute(
              name: 'home',
              path: '/',
              pageBuilder: (context, state) {
                print('GoRoute: Building HomePageContent');
                return getPageBuilder(const HomePageContent());
              },
            ),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(
              name: 'about',
              path: '/about-us',
              pageBuilder: (context, state) {
                print('GoRoute: Building AboutPage');
                return getPageBuilder(const AboutPage());
              },
            ),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(
              name: 'social',
              path: '/social-media',
              pageBuilder: (context, state) {
                print('GoRoute: Building SocialMediaPage');
                return getPageBuilder(const SocialMediaPage());
              },
            ),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(
              name: 'contact',
              path: '/contact-us',
              pageBuilder: (context, state) {
                print('GoRoute: Building ContactPage');
                return getPageBuilder(const ContactPage());
              },
            ),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(
              name: 'learnmore1',
              path: '/learn-more-symbiosis-higher-secondary-school',
              pageBuilder: (context, state) {
                print('GoRoute: Building LearnMorePage');
                return getPageBuilder(const LearnMorePage());
              },
            ),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(
              name: 'learnmore2',
              path: '/learn-more-symbiosis-senior-secondary-school',
              pageBuilder: (context, state) {
                print('GoRoute: Building LearnMorePage2');
                return getPageBuilder(const LearnMorePage2());
              },
            ),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(
              name: 'notifications',
              path: '/notifications',
              pageBuilder: (context, state) {
                print('GoRoute: Building NotificationsPage');
                final notices = state.extra as List<NotificationModel>?;
                return MaterialPage(
                  child: NotificationsPage(notices: notices),
                );
              },
            ),
          ],
        ),
      ],
    ),
  ],
);
